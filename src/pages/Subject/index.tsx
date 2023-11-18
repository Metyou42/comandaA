import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, IconButton } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainSubject,MainWork,MainAbout, BlockFlex, BlockFlexText, BlockFlexAdditional, BlockMargin } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export function Subject(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>

                <BlockFlex>
                    <BlockFlexText>
                        <p>Deadlines</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        <IconButton>
                            <EditOutlinedIcon
                                sx={{
                                    fontSize: 36,
                                    color: "white"
                                }}
                            />
                        </IconButton>

                    </BlockFlexAdditional>
                </BlockFlex>
                
                <BlockMargin>
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
                </BlockMargin>
            </MainContainer>
        </MainBackGround>
    );
}

