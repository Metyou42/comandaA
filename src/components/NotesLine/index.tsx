import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, Paper, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { BlockFlex, BlockFlexJustify, StyledPaperBumberMui, StyledPaperMui } from "./styled";
import { TextLineBox } from "components/TextLineBox";

import PublicIcon from '@mui/icons-material/Public';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

interface NotesLineProps {
    text: string
    number: number
    privateNote: boolean
    // info: any
}

export function NotesLine({ text, number, privateNote }: NotesLineProps): React.ReactElement {
    const [isPrivateNote, setIsPrivateNote] = useState<boolean>(privateNote);

    return (
        <BlockFlexJustify>
            <Paper style={StyledPaperBumberMui}>
                <Typography>{number}</Typography>
            </Paper>
            <TextLineBox text={text} />

            {isPrivateNote
                ? (
                    <BlockFlex>
                        <IconButton
                            sx={{
                                marginLeft: "10px"
                            }}
                        >
                            <PublicIcon
                                sx={{
                                    color: "white",
                                }}
                            />
                        </IconButton>
                    </BlockFlex>
                ) : (
                    <BlockFlex>
                        <IconButton
                            sx={{
                                marginLeft: "10px"
                            }}
                        >
                            <PersonOutlineOutlinedIcon
                                sx={{
                                    color: "white",
                                }}
                            />
                        </IconButton>

                        <IconButton
                            sx={{
                                marginLeft: "10px"
                            }}
                        >
                            <EditOutlinedIcon
                                sx={{
                                    color: "white",
                                }}
                            />
                        </IconButton>
                    </BlockFlex>
                )
            }
            {/* <IconButton
                sx={{
                    marginLeft: "10px"
                }}
            >
                <PublicIcon
                    sx={{
                        color: "white",
                    }}
                />
            </IconButton>

            <IconButton
                sx={{
                    marginLeft: "10px"
                }}
            >
                <EditOutlinedIcon
                    sx={{
                        color: "white",
                    }}
                />
            </IconButton> */}
        </BlockFlexJustify>
    );
}

