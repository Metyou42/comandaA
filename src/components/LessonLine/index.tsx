import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, Paper, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { BlockFlex, BlockFlexJustify, StyledPaperBumberMui, StyledPaperMui } from "./styled";
import { TextLineBox } from "components/TextLineBox";

interface LessonLineProps {
    text: string
    time: string
}

export function LessonLine({ text, time }: LessonLineProps): React.ReactElement {

    return (
        <BlockFlexJustify>
            <Paper style={StyledPaperBumberMui}>
                <Typography>{time}</Typography>
            </Paper>
            <TextLineBox text={text} />
        </BlockFlexJustify>
    );
}

