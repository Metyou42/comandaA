import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export function Deadlines(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>

                <BlockFlex>
                    <BlockFlexText>
                        <p>Deadlines</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        <Button variant="outlined" sx={{ marginLeft: "auto", marginRight: "24px" }}>Outlined</Button>
                        <IconButton>
                            <InfoOutlinedIcon
                                sx={{
                                    fontSize: 36,
                                    color: "white"
                                }}
                            />
                        </IconButton>

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
                    <DeadlinesCheckBox
                        text="27.08 - Дискретна метематика - 5 лаб"
                        color="red"
                        checked="Option 1"
                    />
                    <DeadlinesCheckBox
                        text="27.08 - Дискретна метематика - 2 лаб"
                        color="green"
                        checked="Option 2"
                    />
                    <DeadlinesCheckBox
                        text="27.08 - Дискретна метематика - 3 лаб"
                        color="yellow"
                        checked="Option 2"
                    />
                </Stack>

            </MainContainer>
        </MainBackGround>
    );
}

