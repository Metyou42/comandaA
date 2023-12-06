import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, Paper, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { StyledPaperMui } from "./styled";
import {changeDeadLineStatus, getDeadLines} from "../../lib/axios/SubjectsNotes/requests";

interface DeadlinesCheckBoxProps {
    id: number
    text: string
    color: "red" | "green" | "yellow"
    checked: 1 | 2 | 3
}

export function DeadlinesCheckBox({ id, text, color, checked }: DeadlinesCheckBoxProps): React.ReactElement {
    const [checkedIs, setcheckedIs] = useState<number>(checked);

    function defineColor(color: "red" | "green" | "yellow") {
        if (color === "red") {
            return red[500]
        } else if (color === "green") {
            return green[500]
        } else {
            return yellow[500]
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let idStatus = Number(event.target.name);
        setcheckedIs(idStatus)

        const fetchData = async () => {
            try {
                console.log((idStatus - 1) + " - " + id);
                await changeDeadLineStatus(id, idStatus - 1);
            } catch (error) {
                console.error('Error fetching lecturer data:', error);
            }
        };

        fetchData();
    };

    return (
        <Paper sx={StyledPaperMui}>
            <FlagIcon
                sx={{ color: defineColor(color), marginRight: "10px" }}
            />
            {/* <Typography>27.08 - Дискретна метематика - 5 лаб</Typography> */}
            <Typography>{text}</Typography>

            <Box
                sx={{
                    marginLeft: "auto",
                    marginRight: "",
                }}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkedIs ? checkedIs === 1 : false}
                            onChange={handleChange}
                            name="1"
                            sx={{
                                paddingTop: '0px'
                            }}
                        />
                    }
                    label="Не зроблено"
                    labelPlacement="top"

                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkedIs ? checkedIs === 2 : false}
                            onChange={handleChange}
                            name="2"
                            sx={{
                                paddingTop: '0px'
                            }}
                        />
                    }
                    label="Не здано"
                    labelPlacement="top"

                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkedIs ? checkedIs === 3 : false}
                            onChange={handleChange}
                            name="3"
                            sx={{
                                paddingTop: '0px'
                            }}
                        />
                    }
                    label="Здано"
                    labelPlacement="top"

                />
            </Box>
        </Paper >
    );
}

