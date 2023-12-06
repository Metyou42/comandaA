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
import {getSubjectInTimeTableByDetails, getTimeTable} from "../../lib/axios/TimeTables/requests";

export function CreateNotes(): React.ReactElement {
    const selectedPanel: "Notebook" = "Notebook";
    const [lessonNumber, setLessonNumber] = useState<string>(null);
    const [subjectName, setSubjectName] = useState<string>();
    const [lecturerName, setLecturerName] = useState<string>();
    const [lessonType, setLessonType] = useState<string>();

    const [selectedDateTime, setSelectedDateTime] = React.useState<Moment | null>();
    const [dayOfWeek, setDayOfWeek] = useState<number>(null);

    const [checkedPersonalNote, setCheckedPersonalNote] = useState<boolean>();
    const [checkedReminderNote, setCheckedReminderNote] = useState<boolean>();
    const [currentWeek, setCurrentWeek] = useState<number>(null);
    const [isNumerator, setIsNumerator] = useState<boolean>(true);


    // console.log("selectedDateTime", selectedDateTime);

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

    function onChangeCheckedPersonalNote(event: React.ChangeEvent<HTMLInputElement>) {
        setCheckedPersonalNote(event.target.checked);
    }

    function onChangeCheckedReminderNote(event: React.ChangeEvent<HTMLInputElement>) {
        setCheckedReminderNote(event.target.checked);
    }



    useEffect(() => {
        
    }, []);

    useEffect(() => {
        if (dayOfWeek && isNumerator && lessonNumber) {
            const fetchData = async () => {
                try {
                    let position = Number(lessonNumber);
                    const subjectInTimeTable = await getSubjectInTimeTableByDetails(dayOfWeek, isNumerator, position);
                    
                    setSubjectName(subjectInTimeTable.subject.name);
                    setLecturerName(subjectInTimeTable.lecturer.name);
                    setLessonType(getTypeDescription(subjectInTimeTable.type));
                } catch (error) {
                    console.error('Error fetching lecturer data:', error);
                }
            };

            fetchData();
        }
    }, [dayOfWeek, isNumerator, lessonNumber]);

    const getTypeDescription = (type) => {
        switch (type) {
            case 0:
                return "Лекція";
            case 1:
                return "Практична";
            case 2:
                return "Лабораторна";
            case 3:
                return "Консультація";
            default:
                return "Невідомий тип";
        }
    };
    
    const setDateTime = async (dateTimeMoment) => {
        await setSelectedDateTime(dateTimeMoment);
        
        const date = dateTimeMoment.toDate();
        
        const yearStart = new Date(date.getFullYear(), 0, 1);
        const days = Math.floor((date.getTime() - yearStart.getTime()) / (24 * 60 * 60 * 1000));
        const currentWeekNumber = Math.ceil((days + yearStart.getDay() + 1) / 7);
        
        console.log(currentWeekNumber);
        setCurrentWeek(currentWeekNumber);
        setDayOfWeek(date.getDay());
        setIsNumerator(currentWeekNumber % 2 != 0);
    }

    return (
        <MainBackGround>
            <PanelHeader picked={selectedPanel} />

            <MainContainer>
                <MainBoxText>
                    Create Note
                </MainBoxText>

                <BlockFlexJustify>
                    <Paper sx={StyledPaperMui}>
                        <Typography>{isNumerator ? 'Чисельник' : 'Знаменник'}</Typography>
                    </Paper>

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
                            <MenuItem value={"Безпека програмного забезепчення"}>Безпека програмного забезепчення</MenuItem>
                            <MenuItem value={"прикладна криптологія"}>прикладна криптологія</MenuItem>
                            <MenuItem value={"Англійська"}>Англійська</MenuItem>
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
                            <MenuItem value={"Журавель"}>Журавель</MenuItem>
                            <MenuItem value={"Коробейнікова"}>Коробейнікова</MenuItem>
                            <MenuItem value={"Войтусік"}>Войтусік</MenuItem>
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

                <BlockFlexJustifyMargin>
                    <TextField
                        placeholder="Нотатка"
                        multiline
                        rows={12}
                        maxRows={12}
                        sx={{
                            width: "83%",
                        }}
                    />

                    <FormGroup
                        sx={{
                            marginLeft: "31px"
                        }}
                    >
                        <FormControlLabel
                            control={<Switch
                                checked={checkedPersonalNote}
                                onChange={onChangeCheckedPersonalNote}
                            />}
                            label={checkedPersonalNote ? "Персональна" : "Публічна"}
                            sx={{
                                color: "white"
                            }}
                        />
                        <FormControlLabel
                            control={<Switch
                                checked={checkedReminderNote}
                                onChange={onChangeCheckedReminderNote}
                            />}
                            label={checkedReminderNote ? "Нагадування" : "Дедлайн"}
                            sx={{
                                color: "white"
                            }}
                        />
                    </FormGroup>
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

