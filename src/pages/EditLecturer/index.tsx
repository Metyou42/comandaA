import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, TextField, Box, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import { MainBoxText, StyledPaperMui, MainSubject, MainWork, FormInput, FormInputBottom } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import { useLocation } from "react-router-dom";
import { getLecturer, updateLecturer } from "../../lib/axios/requests";
import { toastError, toastSuccess } from "components/Toastify";
import { log } from "console";

export function EditLecturer(): React.ReactElement {
    const searchParams = new URLSearchParams(useLocation().search)
    const lectorId = searchParams.get("id")

    if (!lectorId) {
        return (
            <MainBackGround>
                <PanelHeader />

                <MainContainer>
                </MainContainer>
            </MainBackGround>
        );
    }

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [patronymic, setPatronymic] = useState<string>("");
    const [rank, setRank] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lecturer = await getLecturer(lectorId);
                console.log(lecturer);

                setName(lecturer.name);
                setSurname(lecturer.surname);
                setPatronymic(lecturer.patronymic);
                setRank(lecturer.rank);
                setEmail(lecturer.email);
            } catch (error) {
                console.error('Error fetching lecturer data:', error);
            }
        };

        fetchData();
    }, []);

    const updateLecturerHandle = async () => {
        try {
            const res = await updateLecturer(lectorId, name, surname, patronymic, email, rank)
            console.log("res", res);


            if (res) {
                toastSuccess(res)
            }
        } catch (error) {
            toastError(error.message)
        }
    }

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
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
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
                        value={`${surname} ${name} ${patronymic}`}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const [surname, name, patronymic] = event.target.value.split(" ")
                            setName(name);
                            setSurname(surname);
                            setPatronymic(patronymic);
                        }}
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
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setRank(event.target.value);
                        }}
                    />
                </FormInput>

                <FormInputBottom>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={updateLecturerHandle}
                        sx={{
                            width: "40%",
                            marginTop: "45px"
                        }}
                    >
                        Apply
                    </Button>
                </FormInputBottom>
            </MainContainer>
        </MainBackGround>
    );
}
