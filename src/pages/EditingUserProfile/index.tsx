import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainSubject,MainWork,FormInput } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";

export function EditingUserProfile(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
               
                <MainSubject>
                    Редагування профілю користувача
                </MainSubject>

                <MainWork>Введіть корпоративну пошту викладача:</MainWork>
                <FormInput> <label><input name="myInput" /></label></FormInput>
               
                <MainWork>Введіть ПІБ викладача:</MainWork>
                <FormInput> <label><input name="myInput" /></label></FormInput>
                
                <MainWork>Введіть звання/досягення викладача:</MainWork>
                <FormInput> <label><input name="myInput" /></label></FormInput>

            </MainContainer>
        </MainBackGround>
    );
}

