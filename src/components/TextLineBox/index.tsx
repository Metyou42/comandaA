import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, Paper, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { StyledPaperMui } from "./styled";

interface TextLineBoxProps {
    text: string
}

export function TextLineBox({ text }: TextLineBoxProps): React.ReactElement {
    return (
        <Paper style={StyledPaperMui}>
            <Typography>{text}</Typography>
        </Paper>
    );
}

