import React, {useEffect, useState} from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, TextField, Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainSubject,MainWork,FormInput } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import {useLocation} from "react-router-dom";
import {getLecturer} from "../../lib/axios/requests";

export function EditLecturer(): React.ReactElement {
    const searchParams = new URLSearchParams(useLocation().search)
    const lectorId = searchParams.get("id")

    if(!lectorId) {
        return (
            <MainBackGround>
                <PanelHeader />

                <MainContainer>
                </MainContainer>
            </MainBackGround>
        );
    }
    
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [rank, setRank] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lecturer = await getLecturer(lectorId);
                console.log(lecturer);

                setFullName(lecturer.surname + " " + lecturer.name + " " + lecturer.patronymic);
                setRank(lecturer.rank);
                setEmail(lecturer.email);
            } catch (error) {
                console.error('Error fetching lecturer data:', error);
            }
        };

        fetchData();
    }, []);

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
                        value={email}
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
                        value={fullName}
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
                        value={rank}
                    />
                </FormInput>
            </MainContainer>
        </MainBackGround>
    );
}

