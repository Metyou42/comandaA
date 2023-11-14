import React, { useEffect } from "react";
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

export function TimeTable(): React.ReactElement {

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

