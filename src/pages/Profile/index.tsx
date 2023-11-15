import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar } from '@mui/material';
import { MainBoxText, StyledPaperMui, MainPhoto } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";

export function Profile(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
                <MainBoxText>
                    Profile
                </MainBoxText>

                <MainPhoto>
                    <Avatar
                        alt="Remy Sharp"
                        sx={{ width: "150px", height: "150px" }}
                        src={Cat}
                    />
                </MainPhoto>

                <MainBoxText>
                    Могіш Крістіна Ярославівна
                </MainBoxText>
                <MainBoxText>
                    Навчальний заклад: Національний університет ім. Івана Франка
                </MainBoxText>
                <MainBoxText>
                    Факультет: Лісничі технології
                </MainBoxText>
                <MainBoxText>
                    Спеціальність: 191 Розробка штучного інтелекту
                </MainBoxText>
                <MainBoxText>Група: 12
                </MainBoxText>

                <MainBoxText>
                    Рік вступу: 2023</MainBoxText>
            </MainContainer>
        </MainBackGround>
    );
}

