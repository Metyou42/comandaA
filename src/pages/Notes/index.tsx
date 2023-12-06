import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Button, IconButton } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexJustify, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { NotesLine } from "components/NotesLine";

export function Notes(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader picked="Notebook" />

            <MainContainer>
                <BlockFlex>
                    <BlockFlexText>
                        <p>Notes</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        <Button variant="outlined" sx={{ marginLeft: "auto", marginRight: "24px" }}>Outlined</Button>
                        <IconButton>
                            <AddCircleOutlineOutlinedIcon
                                sx={{
                                    fontSize: 36,
                                    color: "white"
                                }}
                            />
                        </IconButton>

                    </BlockFlexAdditional>
                </BlockFlex>

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


                <Stack
                    spacing={2}
                    sx={{
                        padding: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >
                    {/* <DeadlinesCheckBox
                        text="27.08 - Дискретна метематика - 5 лаб"
                        color="red"
                        checked="Option 1"
                    /> */}
                    <NotesLine
                        text="27.08 - Дискретна метематика - 6 лаб"
                        number={1}
                        privateNote={true}
                    />
                    <NotesLine
                        text="27.08 - Дискретна метематика - 5 лаб"
                        number={1}
                        privateNote={true}
                    />
                    <NotesLine
                        text="27.08 - Дискретна метематика - 5 лаб"
                        number={1}
                        privateNote={false}
                    />
                    <NotesLine
                        text="27.08 - Дискретна метематика - 2 лаб"
                        number={3}
                        privateNote={false}
                    />
                    {/* <DeadlinesCheckBox
                        text="27.08 - Дискретна метематика - 2 лаб"
                        color="green"
                        checked="Option 2"
                    />
                    <DeadlinesCheckBox
                        text="27.08 - Дискретна метематика - 3 лаб"
                        color="yellow"
                        checked="Option 2"
                    /> */}
                </Stack>

            </MainContainer>
        </MainBackGround>
    );
}

