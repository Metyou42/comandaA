import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, IconButton } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainEmail,MainWork, BlockFlex, BlockFlexText, BlockFlexAdditional, BlockMargin } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export function Teacher(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>

                <BlockFlex>
                    <BlockFlexText>
                        <p>maksymenko.l@lpnu.ua</p>
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
                </BlockMargin>
            </MainContainer>
        </MainBackGround>
    );
}

