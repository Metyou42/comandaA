import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper } from '@mui/material';
import { MainBoxText, StyledPaperMui } from "./styled";
import { TextLineBox } from "components/TextLineBox";

export function Archive(): React.ReactElement {

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

                    <TextLineBox text="27.08 - Дискретна метематика - 5 лаб" />
                    <TextLineBox text="27.08 - Дискретна метематика - 2 лаб" />
                    <TextLineBox text="27.08 - Дискретна метематика - 3 лаб" />
                </Stack>
            </MainContainer>
        </MainBackGround>
    );
}

