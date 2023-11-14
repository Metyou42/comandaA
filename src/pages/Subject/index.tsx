import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainSubject,MainWork,MainAbout } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";

export function Subject(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
               
                <MainSubject>
                    Предмет
                </MainSubject>
                <MainSubject>
                    Прикладна математика
                </MainSubject>

                <MainWork>ВНС: nltu.edu.ua nltu.lviv.ua</MainWork>

                <MainSubject>
                Викладачі:
                </MainSubject>
                <MainWork> Лекції: Павлишин Андрій Миколайович, Вербицька Поліна Василівна, Муравська Світлана Василівна, Чмелик Роман Петрович, Шеломенцев-Терський Святослав Володимирович</MainWork>
                <MainWork>Лабораторні: Павлишин Андрій Миколайович, Вербицька Поліна Василівна, Муравська Світлана Василівна, Чмелик Роман Петрович</MainWork>
              
                


            </MainContainer>
        </MainBackGround>
    );
}

