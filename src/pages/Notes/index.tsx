import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper } from '@mui/material';
import { MainBoxText, StyledPaperMui } from "./styled";

export function Notes(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
                <MainBoxText>
                    Archive
                </MainBoxText>

                <Stack
                    spacing={2}
                    sx={{
                        padding: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >
                    <Paper style={StyledPaperMui}>
                        <Typography>27.08 - Дискретна метематика - 5 лаб</Typography>
                    </Paper>
                    <Paper style={StyledPaperMui}>
                        <Typography>27.08 - Дискретна метематика - 2 лаб</Typography>
                    </Paper>
                    <Paper style={StyledPaperMui}>
                        <Typography>27.08 - Дискретна метематика - 3 лаб</Typography>
                    </Paper>
                </Stack>

            </MainContainer>
        </MainBackGround>
    );
}

