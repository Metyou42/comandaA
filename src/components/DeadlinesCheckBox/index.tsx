import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, Paper, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { StyledPaperMui } from "./styled";

interface DeadlinesCheckBoxProps {
    text: string
    color: "red" | "green" | "yellow"
    checked: "Option 1" | "Option 2" | "Option 3"
}

export function DeadlinesCheckBox({ text, color, checked }: DeadlinesCheckBoxProps): React.ReactElement {
    const [checkedIs, setcheckedIs] = useState<string>(checked);

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
        setcheckedIs(event.target.name)

        // request Update
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
                            checked={checkedIs ? checkedIs === "Option 1" : false}
                            onChange={handleChange}
                            name="Option 1"
                            sx={{
                                paddingTop: '0px'
                            }}
                        />
                    }
                    label="Option 1"
                    labelPlacement="top"

                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkedIs ? checkedIs === "Option 2" : false}
                            onChange={handleChange}
                            name="Option 2"
                            sx={{
                                paddingTop: '0px'
                            }}
                        />
                    }
                    label="Option 2"
                    labelPlacement="top"

                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkedIs ? checkedIs === "Option 3" : false}
                            onChange={handleChange}
                            name="Option 3"
                            sx={{
                                paddingTop: '0px'
                            }}
                        />
                    }
                    label="Option 3"
                    labelPlacement="top"

                />
            </Box>
        </Paper >
    );
}

