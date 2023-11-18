import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, TextField, Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainSubject,MainWork,FormInput } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import { FixedSizeList, ListChildComponentProps } from 'react-window';

export function EditingTeacherProfile(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
               
                <MainSubject>
                    Редагування профілю викладача
                </MainSubject>

                <MainWork>Введіть корпоративну пошту викладача:</MainWork>
                <FormInput>
                    <TextField 
                        id="outlined-basic" 
                        label="Корпоративна пошта викладача" 
                        variant="outlined"
                        sx={{
                            width: "40%",
                            marginTop: "8px"
                        }}
                    />
                </FormInput>

                <MainWork>Введіть ПІБ викладача:</MainWork>
                <FormInput>
                    <TextField 
                        id="outlined-basic" 
                        label="ПІБ викладача" 
                        variant="outlined"
                        sx={{
                            width: "40%",
                            marginTop: "8px"
                        }}
                    />
                </FormInput>

                <MainWork>Введіть звання/досягення викладача:</MainWork>
                <FormInput>
                    <TextField 
                        id="outlined-basic" 
                        label="Звання/досягення викладача" 
                        variant="outlined"
                        sx={{
                            width: "40%",
                            marginTop: "8px"
                        }}
                    />
                </FormInput>
            </MainContainer>
        </MainBackGround>
    );
}

