import React, {useEffect, useState} from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Button, IconButton } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexJustify, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import {ISubjectInTimeTable, ISubjectNote} from "../../lib/axios/types";
import { getTimeTable } from "lib/axios/TimeTables/requests";
import { LessonLine } from "components/LessonLine";

export function TimeTable(): React.ReactElement {
    
    const [subjectInTimeTable, setSubjectInTimeTable] = useState<ISubjectInTimeTable[]>([]);
    const [currentSubjectInTimeTable, setCurrentSubjectInTimeTable] = useState<ISubjectInTimeTable[]>([]);
    
    const [dayOfWeek, setDayOfWeek] = useState<number>(0);
    const [isNumerator, setIsNumerator] = useState<boolean>(true);

    const [todayDayOfWeek, setTodayDayOfWeek] = useState<number>(0);
    const [currentWeek, setCurrentWeek] = useState<number>(0);
    const [todayIsNumerator, setTodayIsNumerator] = useState<boolean>(true)
    const [viewReset, setViewReset] = useState<boolean>(true)
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);


    const setWeekNumber = () => {
        let today = new Date();
        const yearStart = new Date(today.getFullYear(), 0, 1);
        const days = Math.floor((today.getTime() - yearStart.getTime()) / (24 * 60 * 60 * 1000));
        const currentWeekNumber = Math.ceil((days + yearStart.getDay() + 1) / 7);

        setTodayDayOfWeek(today.getDay());
        setDay(today.getDay());
        
        setCurrentWeek(currentWeekNumber);

        setTodayIsNumerator(currentWeek % 2 != 0);
        setIsNumerator(currentWeek % 2 != 0);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const subjectInTimeTable = await getTimeTable();
                setSubjectInTimeTable(subjectInTimeTable);
                setWeekNumber();
            } catch (error) {
                console.error('Error fetching lecturer data:', error);
            }
        };
        
        fetchData();
    }, []);

    useEffect(() => {
        if (dayOfWeek && subjectInTimeTable && isNumerator && currentWeek && todayDayOfWeek && todayIsNumerator)
        {
            setTimeTableForThisDay(dayOfWeek, isNumerator);   
        }
    }, [dayOfWeek, subjectInTimeTable, isNumerator, currentWeek, todayDayOfWeek, todayIsNumerator]);

    const setTimeTableForThisDay = (dayChange, isNumeratorChange) => {
        let filteredSubjects = subjectInTimeTable.filter(function (subject) {
            return (subject.day === dayChange) && (subject.isEveryWeek || subject.isNumerator === isNumeratorChange);
        });

        if(dayChange == todayDayOfWeek && isNumeratorChange == todayIsNumerator) {
            setViewReset(true);
        }
        else{
            setViewReset(false);
        }

        setCurrentSubjectInTimeTable(filteredSubjects);
    }

    const changeWeek = async () => {
        setTimeTableForThisDay(dayOfWeek, !isNumerator);
        setIsNumerator(!isNumerator);
    }
    
    const setDay = async (day) => {
        await setDayOfWeek(day);
        await setActiveButtonIndex(day);
    }

    const changeDay = async (day) =>{
        setTimeTableForThisDay(day, isNumerator);
        setDay(day);
    }

    const resetDay = async () =>{
        setTimeTableForThisDay(todayDayOfWeek, todayIsNumerator);
        setDay(todayDayOfWeek);
        setIsNumerator(todayIsNumerator);
    }
    
    const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця'];
    const selectedPanel: "Schedule" = "Schedule";
    
    return (
        <MainBackGround>
            <PanelHeader picked={selectedPanel} />

            <MainContainer>

                <MainBoxText>
                    Розклад
                </MainBoxText>
                
                <BlockFlexJustify>
                    {daysOfWeek.map((day, index) => (
                        <Button
                            key={index + 1}
                            variant="contained"
                            disabled={activeButtonIndex !== null && activeButtonIndex === index + 1}
                            sx={{
                                width: "100%",
                                height: "100%",
                                marginRight: "18px",
                            }}
                            onClick={() => changeDay(index + 1)}
                        >
                            {day}
                        </Button>
                    ))}
                </BlockFlexJustify>

                <BlockFlex>
                    <Button
                        variant="contained"
                        sx={{
                            width: "10%"
                        }}
                        onClick={() => changeWeek()}
                    >

                        {isNumerator ? 'Чисельник' : 'Знаменник'}
                    </Button>
                    {/*<LocalizationProvider dateAdapter={AdapterMoment}>*/}
                    {/*    <DatePicker*/}
                    {/*        label="Дата"*/}
                    {/*    // value={dateTime}*/}
                    {/*    // onChange={(dateTime) => setDateTime(dateTime)}*/}
                    {/*    />*/}
                    {/*</LocalizationProvider>*/}

                    <BlockFlexAdditional>
                        <Button
                            disabled={viewReset} 
                            variant="outlined" 
                            sx={{ 
                                marginLeft: "auto", 
                                marginRight: "24px", 
                                marginBottom: "20px" }}
                            onClick={() => resetDay()}
                        >
                            Повернутись до поточного дня
                        </Button>
                    </BlockFlexAdditional>
                </BlockFlex>

                <Stack
                    spacing={2}
                    sx={{
                        padding: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >

                    {currentSubjectInTimeTable.map((subjectInTimeTable) => {
                    return (
                        <LessonLine
                            text={`${subjectInTimeTable.lecturer.surname} ${subjectInTimeTable.lecturer.name} ${subjectInTimeTable.lecturer.patronymic} - ${subjectInTimeTable.subject.name} - ${subjectInTimeTable.description}`}
                            time={subjectInTimeTable.position}
                        />
                    );
                })}
                </Stack>

                
            </MainContainer>
        </MainBackGround>
    );
}

