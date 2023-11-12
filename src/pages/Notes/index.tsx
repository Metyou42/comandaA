import React, { useEffect } from "react";
import { AppBar, Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockFlexCenter } from "./styled";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";


import { Stack, Typography , Paper } from '@mui/material';

export function Notes(): React.ReactElement {

    const paperStyle = {
        backgroundColor: 'rgba(83, 59, 119, 0.5)',
        padding: '10px',
        paddingLeft: '20px', // Adjust the left padding as needed
        paddingRight: '20px', // Adjust the right padding as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //height: '100%', // This ensures the content takes up the full height
        height: '50px'
    };


    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
            <h3 style={{ textAlign: 'center', color: 'white' }}>
                Archive
            </h3>

            <Stack spacing={2} style={{padding: '10px', paddingLeft: '20px', paddingRight: '20px' }}>
            <Paper style={paperStyle}>
                <Typography>27.08 - Дискретна метематика - 5 лаб</Typography>
            </Paper>
            <Paper style={paperStyle}>
                <Typography>27.08 - Дискретна метематика - 2 лаб</Typography>
            </Paper>
            <Paper style={paperStyle}>
                <Typography>27.08 - Дискретна метематика - 3 лаб</Typography>
            </Paper>
            </Stack>

            </MainContainer>
        </MainBackGround>
    );
}

