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
    const [todayIsNumerator, setTodayIsNumerator] = useState<boolean>(true);
    
    
    const setWeekNumber = () => {
        let today = new Date();
        const yearStart = new Date(today.getFullYear(), 0, 1);
        const days = Math.floor((today.getTime() - yearStart.getTime()) / (24 * 60 * 60 * 1000));
        const currentWeekNumber = Math.ceil((days + yearStart.getDay() + 1) / 7);
        
        console.log("CurrentWeek " + currentWeekNumber);

        setTodayDayOfWeek(today.getDay());
        setDayOfWeek(today.getDay());
        
        setCurrentWeek(currentWeekNumber);

        setTodayIsNumerator(currentWeek % 2 != 0);
        setIsNumerator(todayIsNumerator);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const subjectInTimeTable = await getTimeTable();
                
                console.log(subjectInTimeTable);
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
            setTimeTableForThisDay();   
        }
    }, [dayOfWeek, subjectInTimeTable, isNumerator, currentWeek, todayDayOfWeek, todayIsNumerator]);

    const setTimeTableForThisDay = () => {

        console.log(dayOfWeek)
        
        let filteredSubjects = subjectInTimeTable.filter(function (subject) {
            return (subject.day === dayOfWeek) && (subject.isEveryWeek || subject.isNumerator === isNumerator);
        });

        console.log(filteredSubjects)
        setCurrentSubjectInTimeTable(filteredSubjects);

        // if(dayOfWeek != todayDayOfWeek || isNumerator != todayIsNumerator) {
        //     showResetDiv();
        // }
        // else {
        //     hideResetDiv();
        // }
    } // NW
    
    const setWeek = () => {
        //let currentWeek = document.getElementById('current-week');
        if (isNumerator)
        {
            //currentWeek.innerText = "Чисельник"; // TODO translate
        }
        else
        {
            //currentWeek.innerText = "Знаменник"; // TODO translate 
        }
    }; // NW

    const changeWeek = () => {
        // setIsNumerator(!isNumerator);
        // setWeek();
        // setTimeTableForThisDay();
    }


    const setDay = (day)=> {
        // let isSelected = false;
        //
        // document.querySelectorAll('.day')
        //     .forEach((link, index) => {
        //
        //         // link.addEventListener('click', function() {
        //         //     changeDay(index + setDayOfWeek();
        //         // });
        //
        //         if (index + setDayOfWeek( == day)
        //         {
        //             //link.id = 'current-day';
        //             isSelected = true;
        //         }
        //     });
        //
        // if (!isSelected)
        // {
        //     //setDayOfWeek(setDayOfWeek();
        //     //setTodayDayOfWeek(setDayOfWeek();
        //     //document.querySelectorAll('.day').item(0).id = 'current-day';
        // }
    }// NW

    const changeDay = (day) =>{
       // let currentDayElement = document.getElementById('current-day');

        // if (currentDayElement) {
        //     //currentDayElement.id = "";
        // }
        //
        // setDayOfWeek(day);
        // setDay(day);
        // setTimeTableForThisDay();
    } // NW

    const resetDay = ()=>
    {
        // setDayOfWeek(today.getDay());
        // setIsNumerator(todayIsNumerator);
        //
        // //changeDay(dayOfWeek);
        // setWeek();
        // hideResetDiv();
    } // NW

    const showResetDiv = () => {
        let resetDiv = document.getElementById('reset-to-current-day');
        resetDiv.style.display = 'block';
    } // NW

    const hideResetDiv = ()=> { 
        let resetDiv = document.getElementById('reset-to-current-day');
        resetDiv.style.display = 'none';
    } // NW
    
    /*

     */

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>

                <MainBoxText>
                    Розклад
                </MainBoxText>



                <BlockFlexJustify>
                    <Button
                        variant="contained"
                        disabled
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        Понеділок
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        Вівторок
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginRight: "18px"
                        }}
                    >
                        Середа
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginRight: "18px"
                        }}
                    >
                        Четвер
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%"
                        }}
                    >
                        П'ятниця
                    </Button>
                </BlockFlexJustify>

                <BlockFlex>
                    <Button
                        variant="contained"
                        sx={{
                            width: "10%"
                        }}
                    >
                        Чисельник
                    </Button>
                    {/*<LocalizationProvider dateAdapter={AdapterMoment}>*/}
                    {/*    <DatePicker*/}
                    {/*        label="Дата"*/}
                    {/*    // value={dateTime}*/}
                    {/*    // onChange={(dateTime) => setDateTime(dateTime)}*/}
                    {/*    />*/}
                    {/*</LocalizationProvider>*/}

                    <BlockFlexAdditional>
                        <Button variant="outlined" sx={{ marginLeft: "auto", marginRight: "24px", marginBottom: "20px" }}>Повернутись до поточного дня</Button>
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

