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

export function CreateNotes(): React.ReactElement {
    const [lessonNumber, setLessonNumber] = useState<string>();
    const [lessonName, setLessonName] = useState<string>();
    const [teacherName, setTeacherName] = useState<string>();
    const [lessonType, setLessonType] = useState<string>();

    const [dateTime, setDateTime] = React.useState<Moment | null>();

    const [checkedPersonalNote, setCheckedPersonalNote] = useState<boolean>();
    const [checkedReminderNote, setCheckedReminderNote] = useState<boolean>();


    // console.log("dateTime", dateTime);

    function onChangeLessonNumber(event: SelectChangeEvent) {
        setLessonNumber(event.target.value as string)
    }

    function onChangeLessonName(event: SelectChangeEvent) {
        setLessonName(event.target.value as string)
    }

    function onChangeTeacherName(event: SelectChangeEvent) {
        setTeacherName(event.target.value as string)
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

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
                <MainBoxText>
                    Create Note
                </MainBoxText>

                <BlockFlexJustify>
                    <Paper sx={StyledPaperMui}>
                        <Typography>{"Чисельник"}</Typography>
                    </Paper>

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Дата"
                            value={dateTime}
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
                            value={lessonName}
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
                            value={teacherName}
                            label="teacherName"
                            onChange={onChangeTeacherName}
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

