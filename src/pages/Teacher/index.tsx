import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainEmail,MainWork } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";

export function Teacher(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
               
                <MainEmail>
                    maksymenko.l@lpnu.ua
                </MainEmail>

                <MainBoxText>
                Викладач
                </MainBoxText>
                <MainBoxText>
                Максименко Лідія Анатоліївна
                </MainBoxText>
                <MainWork>
                Працює в: Національний університет "Львівська Політехніка" 
                </MainWork>
                <MainBoxText> 
                Доцент кафедри ІКТАІ, доктор наук......
                </MainBoxText>
                


            </MainContainer>
        </MainBackGround>
    );
}

