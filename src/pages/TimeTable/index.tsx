import React, {useEffect, useState} from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Button, IconButton } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexJustify, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { NotesLine } from "components/NotesLine";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LessonLine } from "components/LessonLine";
import {getDeadLinesArchive, getTimeTable} from "../../lib/axios/requests";
import {ISubjectInTimeTable, ISubjectNote} from "../../lib/axios/types";

export function TimeTable(): React.ReactElement {
    
    const [subjectInTimeTable, setSubjectInTimeTable] = useState<ISubjectInTimeTable[]>([]);
    const [dayOfWeek, setDayOfWeek] = useState(1);
    const [isNumerator, setIsNumerator] = useState(true);
    const [today, setToday] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const subjectInTimeTable = await getTimeTable();
                console.log(subjectInTimeTable);

                setSubjectInTimeTable(subjectInTimeTable);
            } catch (error) {
                console.error('Error fetching lecturer data:', error);
            }
            //setDay(today.getDay());
            //setIsNumerator(today.getWeekNumber() % 2 !== 0);
            setTimeTableForThisDay();
        };

        fetchData();
    }, [today]);

    const changeDay = (day) => {
        setDayOfWeek(day);
        //setIsNumerator(today.getWeekNumber() % 2 !== 0);
        setTimeTableForThisDay();
    };

    const resetDay = () => {
        setDayOfWeek(today.getDay());
        //setIsNumerator(today.getWeekNumber() % 2 !== 0);
        setTimeTableForThisDay();
    };

    const setTimeTableForThisDay = () => {
        // Ваша логіка для встановлення розкладу
    };

    const setWeek = () => {
        // Ваша логіка для встановлення поточного тижня
    };
    
    
    /*
    
    Date.prototype.getWeekNumber = function () {
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

document.getElementById('current-week').addEventListener('click', changeWeek);
document.getElementById('reset-to-current-day').addEventListener('click', resetDay);

var today = new Date();

var todayDayOfWeek = today.getDay()
var dayOfWeek = todayDayOfWeek;

var todayIsNumerator = today.getWeekNumber() % 2 != 0;
var isNumerator = todayIsNumerator;

setDay(dayOfWeek);

setWeek();

setTimeTableForThisDay();

    function setTimeTableForThisDay()
{
    var filteredSubjects = timeTable.filter(function (subject) {
        return (subject.Day === dayOfWeek) && (subject.IsEveryWeek || subject.IsNumerator === isNumerator);
    });

    var scheduleTable = document.querySelector('.info tbody');

    while (scheduleTable.firstChild) {
        scheduleTable.removeChild(scheduleTable.firstChild);
    }

    for (var i = 1; i <= 7; i++) {
        var row = document.createElement('tr');

        var timeCell = document.createElement('td');
        timeCell.className = 'time';
        timeCell.textContent = i;
        row.appendChild(timeCell);

        var scheduleDataCell = document.createElement('td');
        scheduleDataCell.className = 'schedule_data';
        var matchingSubject = filteredSubjects.find(function (subject) {
            return subject.Position === i;
        });
        if (matchingSubject) {
            scheduleDataCell.textContent =
                matchingSubject.Subject.Name + " - " + matchingSubject.Lecturer.Name + ": \n" + matchingSubject.AdditInfo;
        } else {
            scheduleDataCell.textContent = "----";
        }
        row.appendChild(scheduleDataCell);

        var lectureTypeCell = document.createElement('td');
        lectureTypeCell.className = 'lecture-type';
        lectureTypeCell.textContent = matchingSubject ? matchingSubject.Type : '-';
        row.appendChild(lectureTypeCell);

        scheduleTable.appendChild(row);
    }

    if(dayOfWeek != todayDayOfWeek || isNumerator != todayIsNumerator) {
        showResetDiv();
    }
    else {
        hideResetDiv();
    }
}

function setWeek()
{
    var currentWeek = document.getElementById('current-week');
    if (isNumerator)
    {
        currentWeek.innerText = "Numerator"; // TODO translate
    }
    else
    {
        currentWeek.innerText = "Denominator"; // TODO translate 
    }
}

function changeWeek()
{
    isNumerator = !isNumerator;
    setWeek();
    setTimeTableForThisDay();
}

function setDay(day)
{
    var isSelected = false;
    
    document.querySelectorAll('.day')
        .forEach((link, index) => {

            link.addEventListener('click', function() {
                changeDay(index + 1);
            });

            if (index + 1 == day)
            {
                link.id = 'current-day';
                isSelected = true;
            }
        });

    if (!isSelected)
    {
        dayOfWeek = 1;
        todayDayOfWeek = 1;
        document.querySelectorAll('.day').item(0).id = 'current-day';
    }
}

function changeDay(day)
{
    var currentDayElement = document.getElementById('current-day');
    
    if (currentDayElement) {
        currentDayElement.id = "";
    }

    dayOfWeek = day;
    setDay(day);
    setTimeTableForThisDay();
}

function resetDay() 
{
    dayOfWeek = today.getDay();
    isNumerator = today.getWeekNumber() % 2 != 0;

    changeDay(dayOfWeek);
    setWeek();
    hideResetDiv();
}

function showResetDiv() 
{
    var resetDiv = document.getElementById('reset-to-current-day');
    resetDiv.style.display = 'block';
}

function hideResetDiv() 
{
    var resetDiv = document.getElementById('reset-to-current-day');
    resetDiv.style.display = 'none';
}
    
     */

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>

                <MainBoxText>
                    Timetable
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
                        Outlined
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginRight: "18px",
                        }}
                    >
                        Outlined
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginRight: "18px"
                        }}
                    >
                        Outlined
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%",
                            height: "100%",
                            marginRight: "18px"
                        }}
                    >
                        Outlined
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            width: "100%"
                        }}
                    >
                        Outlined
                    </Button>
                </BlockFlexJustify>

                <BlockFlex>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Дата"
                        // value={dateTime}
                        // onChange={(dateTime) => setDateTime(dateTime)}
                        />
                    </LocalizationProvider>

                    <BlockFlexAdditional>
                        <Button variant="outlined" sx={{ marginLeft: "auto", marginRight: "24px" }}>Повернутись до поточного дня</Button>
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
                    <LessonLine
                        text="27.08 - Дискретна метематика - 6 лаб"
                        time={"8:30"}
                    />
                    <LessonLine
                        text="27.08 - Дискретна метематика - 5 лаб"
                        time={"10:00"}
                    />
                    <LessonLine
                        text="27.08 - Дискретна метематика - 5 лаб"
                        time={"10:00"}
                    />
                    <LessonLine
                        text="27.08 - Дискретна метематика - 2 лаб"
                        time={"10:00"}
                    />
                </Stack>

            </MainContainer>
        </MainBackGround>
    );
}

