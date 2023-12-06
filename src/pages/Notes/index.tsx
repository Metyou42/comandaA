import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Button, IconButton } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexJustify, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { NotesLine } from "components/NotesLine";
import { getDeadLines, getSubjectsNotes } from "../../lib/axios/SubjectsNotes/requests";
import { getTimeTable } from "../../lib/axios/TimeTables/requests";
import { ISubjectNote } from "../../lib/axios/types";
import { useHistory } from "react-router-dom";

export function Notes(): React.ReactElement {
    const history = useHistory();
    const selectedPanel: "Notebook" = "Notebook";
    const daysOfWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця'];

    const [todayDayOfWeek, setTodayDayOfWeek] = useState<number>(null);
    const [todayWeekNumber, setTodayWeekNumber] = useState<number>(null);

    const [weekNotes, setWeekNotes] = useState<ISubjectNote[]>(null);

    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>(null);
    const [selectedWeekNumber, setSelectedWeekNumber] = useState<number>(null);
    const [currentNotes, setCurrentNotes] = useState<ISubjectNote[]>([]);

    const [firstDateOfWeek, setFirstDateOfWeek] = useState<Date>(new Date());
    const [lastDateOfWeek, setLastDateOfWeek] = useState<Date>(new Date());
    const [isInit, setIsInit] = useState<boolean>(true);

    const getCurrentWeekNumber = () => {
        let today = new Date();
        const yearStart = new Date(today.getFullYear(), 0, 1);
        const days = Math.floor((today.getTime() - yearStart.getTime()) / (24 * 60 * 60 * 1000));
        const currentWeekNumber = Math.ceil((days + yearStart.getDay() + 1) / 7);

        setTodayDayOfWeek(today.getDay());
        setDay(today.getDay());

        setTodayWeekNumber(currentWeekNumber);
        setSelectedWeekNumber(currentWeekNumber);
    }

    useEffect(() => {
        getCurrentWeekNumber();
    }, []);

    useEffect(() => {
        if (selectedDayOfWeek && todayWeekNumber && todayDayOfWeek && !weekNotes) {
            const fetchData = async () => {
                setWeekData(todayWeekNumber);
            };

            fetchData();
        }
    }, [selectedDayOfWeek, todayWeekNumber, todayDayOfWeek]);



    useEffect(() => {
        if (selectedDayOfWeek && todayWeekNumber && todayDayOfWeek && weekNotes && isInit) {
            setNotesForThisDay(selectedDayOfWeek, todayWeekNumber, weekNotes);
            setIsInit(false);
        }
    }, [selectedDayOfWeek, todayWeekNumber, todayDayOfWeek, weekNotes]);


    const setWeekData = async (weekNumber) => {
        try {
            let firstDateOfWeek = getDateFromWeekNumber(1, weekNumber, new Date().getFullYear());
            let lastDateOfWeek = getDateFromWeekNumber(5, weekNumber, new Date().getFullYear());

            console.log(firstDateOfWeek);
            console.log(lastDateOfWeek);

            setFirstDateOfWeek(firstDateOfWeek);
            setLastDateOfWeek(lastDateOfWeek);

            let notesForWeek = await getSubjectsNotes(firstDateOfWeek, lastDateOfWeek);

            console.log(notesForWeek);
            setWeekNotes(notesForWeek);

            return notesForWeek;
        } catch (error) {
            console.error('Error fetching lecturer data:', error);
        }
    }
    const setDay = async (day) => {
        await setSelectedDayOfWeek(day);
        await setActiveButtonIndex(day);
    }

    const changeDay = async (day) => {
        setNotesForThisDay(day, selectedWeekNumber, weekNotes);
        setDay(day);
    }

    const nextWeek = async () => {
        let nextWeekNumber = selectedWeekNumber + 1;
        setWeek(nextWeekNumber);
    }

    const prevWeek = async () => {
        let prevWeekNumber = selectedWeekNumber - 1;
        setWeek(prevWeekNumber);
    }

    const setWeek = async (weekNumber) => {
        let currentNotes = await setWeekData(weekNumber);
        setNotesForThisDay(selectedDayOfWeek, weekNumber, currentNotes);
        setSelectedWeekNumber(weekNumber);
    }

    const setNotesForThisDay = (dayChange, weekNumber, notes) => {
        console.log("Day - " + dayChange + "; WeekNumber - " + weekNumber)
        let selectedDate = getDateFromWeekNumber(dayChange, weekNumber, new Date().getFullYear());

        if (notes !== null && notes.length > 0) {
            let filteredNotes = notes.filter(function (note) {
                return note.subjectInTimeTable.day === selectedDate.getDay();
            });

            console.log(filteredNotes);
            setCurrentNotes(filteredNotes);
        }
        else {
            console.log("No notes");
            setCurrentNotes([]);
        }
    }

    function getDateFromWeekNumber(dayOfWeek, weekNumber, year) {
        console.log(dayOfWeek);
        console.log(weekNumber);
        console.log(year);
        const startDate = new Date(year, 0, 1);
        const firstDayInYear = startDate.getDay();
        const dayDifference = dayOfWeek - firstDayInYear;
        const daysToAdd = (weekNumber - 1) * 7 + dayDifference;
        const resultDate = new Date(startDate);

        resultDate.setDate(startDate.getDate() + daysToAdd);

        return resultDate;
    }

    return (
        <MainBackGround>
            <PanelHeader picked={selectedPanel} />

            <MainContainer>
                <BlockFlex>
                    <BlockFlexText>
                        <p>Нотатник</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        <Button
                            variant="outlined"
                            sx={{ marginLeft: "auto", marginRight: "24px" }}

                            onClick={() => history.push("/deadlines")}
                        >Мої дедлайни</Button>
                        <IconButton>
                            <AddCircleOutlineOutlinedIcon
                                sx={{
                                    fontSize: 36,
                                    color: "white"
                                }}
                                onClick={() => history.push("/create/note")}
                            />
                        </IconButton>

                    </BlockFlexAdditional>
                </BlockFlex>

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
                    <Button variant="outlined"
                        sx={{ marginLeft: "80px", marginRight: "80px", marginTop: "5px" }}
                        onClick={() => prevWeek()}
                    >Попередній</Button>

                    <BlockFlexText>
                        <p>{firstDateOfWeek.getDate()}.{firstDateOfWeek.getMonth() + 1}-{lastDateOfWeek.getDate()}.{lastDateOfWeek.getMonth() + 1}</p>
                    </BlockFlexText>

                    <Button variant="outlined"
                        sx={{ marginLeft: "80px", marginRight: "80px", marginTop: "5px" }}
                        onClick={() => nextWeek()}
                    >Наступний</Button>
                </BlockFlex>

                <Stack
                    spacing={2}
                    sx={{
                        padding: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >
                    {currentNotes.map((note) => {
                        return (
                            <NotesLine
                                key={note.id}
                                text={`${note.subjectInTimeTable.lecturer.surname} ${note.subjectInTimeTable.lecturer.name} ${note.subjectInTimeTable.lecturer.patronymic} - ${note.subjectInTimeTable.subject.name} - ${note.text}`}
                                number={note.subjectInTimeTable.position}
                                privateNote={note.isPersonal}
                            />
                        );
                    })}
                </Stack>

            </MainContainer>
        </MainBackGround>
    );
}

