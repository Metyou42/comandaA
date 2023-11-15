import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, TextField } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainSubject,MainWork,FormInput } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";

export function EditingSubjectProfile(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
               
                <MainSubject>
                Редагування Профілю предмету
                </MainSubject>

                <MainWork>Введіть повну назву предмету:</MainWork>
                <MainSubject>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
               </MainSubject>
                <MainWork>Додайте посилання на сторінку предмету у ВНС:</MainWork>
                
                <MainSubject>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
               </MainSubject>
 
            </MainContainer>
        </MainBackGround>
    );
}

