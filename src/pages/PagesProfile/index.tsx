import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar } from '@mui/material';
import { MainBoxText, StyledPaperMui } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";

export function PagesProfile(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
                <MainBoxText>
                    Profile
                </MainBoxText>

                <MainBoxText>
                    <Avatar
                        alt="Remy Sharp"
                        sx={{ width: "100px", height: "100px" }}
                        src={Cat}
                    />
                </MainBoxText>

                <MainBoxText>
                    Profile 1
                </MainBoxText>

                <MainBoxText>
                    Profile 2
                </MainBoxText>

                <MainBoxText>
                    Profile 3
                </MainBoxText>
            </MainContainer>
        </MainBackGround>
    );
}

