import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Button, IconButton, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexJustify, BlockFlexJustifyMargin, BlockFlexJustifyMarginCenter, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { NotesLine } from "components/NotesLine";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { Moment } from "moment";
import { getSubjectInTimeTableByDetails, getTimeTable } from "../../lib/axios/TimeTables/requests";
import { getSearchLecturer, getSearchSubject } from "lib/axios/Search/requests";
import { ILecturerForSubject, ISubjectForLecturer } from "lib/axios/types";
import { toastError } from "components/Toastify";

export function CreatesubjectInTimeTable(): React.ReactElement {
    const selectedPanel = "Schedule";
    const [lessonNumber, setLessonNumber] = useState<string>(null);
    const [subjectName, setSubjectName] = useState<string>();
    const [lecturerName, setLecturerName] = useState<string>();
    const [lessonType, setLessonType] = useState<string>();
    const [frequency, setFrequency] = useState<string>();

    const [selectedDateTime, setSelectedDateTime] = React.useState<Moment | null>();
    const [dayOfWeek, setDayOfWeek] = useState<number>(null);

    const [checkedPersonalNote, setCheckedPersonalNote] = useState<boolean>();
    const [checkedReminderNote, setCheckedReminderNote] = useState<boolean>();
    const [currentWeek, setCurrentWeek] = useState<number>(null);
    const [isNumerator, setIsNumerator] = useState<boolean>(true);

    const [lessons, setLessons] = useState<ISubjectForLecturer[]>([]);
    const [lecturers, setLecturers] = useState<ILecturerForSubject[]>([]);


    function onChangeFrequency(event: SelectChangeEvent) {
        setFrequency(event.target.value as string)
    }

    function onChangeLessonNumber(event: SelectChangeEvent) {
        setLessonNumber(event.target.value as string)
    }

    function onChangeLessonName(event: SelectChangeEvent) {
        setSubjectName(event.target.value as string)
    }

    function onChangeLecturerName(event: SelectChangeEvent) {
        setLecturerName(event.target.value as string)
    }

    function onChangeLessonType(event: SelectChangeEvent) {
        setLessonType(event.target.value as string)
    }

    const setDateTime = async (dateTimeMoment) => {
        await setSelectedDateTime(dateTimeMoment);

        const date = dateTimeMoment.toDate();

        const yearStart = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date.getTime() - yearStart.getTime()) / (24 * 60 * 60 * 1000));
        const currentWeekNumber = Math.ceil((days + yearStart.getDay() + 1) / 7);

        setCurrentWeek(currentWeekNumber);
        setDayOfWeek(date.getDay());
        setIsNumerator(currentWeekNumber % 2 != 0);
    }

    const getLessons = async () => {
        const dataRes = await getSearchSubject(0, 100, "")
        setLessons(dataRes)
    }

    const getLecturers = async () => {
        const dataRes = await getSearchLecturer(0, 100, "")
        setLecturers(dataRes)
    }

    useEffect(() => {
        try {
            getLessons()
            getLecturers()
        } catch (error) {
            console.error('Error fetching subjects and lectures data:', error);
            toastError(error.message)
        }
    }, [])

    return (
        <MainBackGround>
            <PanelHeader picked={selectedPanel} />

            <MainContainer>
                <MainBoxText>
                    Create Lesson
                </MainBoxText>

                <BlockFlexJustify>
                    <FormControl
                        sx={{
                            width: "20%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        <InputLabel id="demo-simple-select-label">Періодичність</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={frequency}
                            label="frequency"
                            onChange={onChangeFrequency}
                        >
                            <MenuItem value={"Чисельник"}>Чисельник</MenuItem>
                            <MenuItem value={"Знаменник"}>Знаменник</MenuItem>
                            <MenuItem value={"Крожного тижня"}>Крожного тижня</MenuItem>
                        </Select>
                    </FormControl>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Дата"
                            value={selectedDateTime}
                            onChange={(dateTime) => setDateTime(dateTime)}
                        />
                    </LocalizationProvider>
                </BlockFlexJustify>

                <BlockFlexJustifyMargin>
                    <FormControl
                        sx={{
                            width: "10%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        <InputLabel id="demo-simple-select-label">Пара</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lessonNumber}
                            label="lessonNumber"
                            onChange={onChangeLessonNumber}
                        >
                            <MenuItem value={"1"}>1</MenuItem>
                            <MenuItem value={"2"}>2</MenuItem>
                            <MenuItem value={"3"}>3</MenuItem>
                            <MenuItem value={"4"}>4</MenuItem>
                            <MenuItem value={"5"}>5</MenuItem>
                            <MenuItem value={"6"}>6</MenuItem>
                            <MenuItem value={"7"}>7</MenuItem>
                            <MenuItem value={"8"}>8</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            width: "45%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        <InputLabel id="demo-simple-select-label">Предмет</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={subjectName}
                            label="lessonName"
                            onChange={onChangeLessonName}
                        >
                            {lessons.map((lesson) => (
                                <MenuItem value={lesson.id}>{lesson.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            width: "30%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        <InputLabel id="demo-simple-select-label">Викладач</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lecturerName}
                            label="lecturerName"
                            onChange={onChangeLecturerName}
                        >
                            {lecturers.map((lecturer) => (
                                <MenuItem value={lecturer.id}>{`${lecturer.name} ${lecturer.surname} ${lecturer.patronymic}`}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl
                        sx={{
                            width: "15%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        <InputLabel id="demo-simple-select-label">Тип пари</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lessonType}
                            label="lessonType"
                            onChange={onChangeLessonType}
                        >
                            <MenuItem value={"Лекція"}>Лекція</MenuItem>
                            <MenuItem value={"Лабораторна"}>Лабораторна</MenuItem>
                            <MenuItem value={"Практична"}>Практична</MenuItem>
                        </Select>
                    </FormControl>
                </BlockFlexJustifyMargin>

                <BlockFlexJustifyMarginCenter>
                    <Button
                        variant="contained"
                        size="large"
                    >
                        Зберегти
                    </Button>
                </BlockFlexJustifyMarginCenter>
            </MainContainer>
        </MainBackGround>
    );
}

