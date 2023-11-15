import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Button, IconButton, TextField } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexJustify, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { NotesLine } from "components/NotesLine";

export function Com(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
                <MainBoxText>
                    Timetable
                </MainBoxText>

                <MainBoxText>
                    Timsddasdetable dad as
                </MainBoxText>

                <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            </MainContainer>
        </MainBackGround>
    );
}

