import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { TextField, Button } from '@mui/material';
import { MainSubject, MainWork, FormInput } from "./styled";
import { useLocation } from "react-router-dom";
import { getSubject, updateSubject } from "lib/axios/requests";
import { toastError, toastSuccess } from "components/Toastify";
import { FormInputBottom } from "pages/EditLecturer/styled";

export function EditingSubjectProfile(): React.ReactElement {
    const searchParams = new URLSearchParams(useLocation().search)
    const subjectId = searchParams.get("id")

    if (!subjectId) {
        return (
            <MainBackGround>
                <PanelHeader />

                <MainContainer>
                </MainContainer>
            </MainBackGround>
        );
    }

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const subject = await getSubject(subjectId);
                console.log(subject);

                setName(subject.name);
                setDescription(subject.description);
            } catch (error) {
                console.error('Error fetching subject data:', error);
            }
        };

        fetchData();
    }, []);

    const updateSubjectHandle = async () => {
        try {
            const res = await updateSubject(subjectId, name, description)
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
                    Редагування профілю предмету
                </MainSubject>

                <MainWork>Введіть повну назву предмету:</MainWork>
                <FormInput>
                    <TextField
                        id="outlined-basic"
                        label="Повна назва предмету"
                        variant="outlined"
                        sx={{
                            width: "40%",
                            marginTop: "8px"
                        }}
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setName(event.target.value);
                        }}
                    />
                </FormInput>

                <MainWork>Додайте посилання на сторінку предмету у ВНС:</MainWork>
                <FormInput>
                    <TextField
                        id="outlined-basic"
                        label="Посилання на сторінку предмету у ВНС"
                        variant="outlined"
                        sx={{
                            width: "40%",
                            marginTop: "8px"
                        }}
                        value={description}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDescription(event.target.value);
                        }}
                    />
                </FormInput>

                <FormInputBottom>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={updateSubjectHandle}
                        sx={{
                            width: "40%",
                            marginTop: "45px"
                        }}
                    >
                        Apply
                    </Button>
                </FormInputBottom>

            </MainContainer>
        </MainBackGround >
    );
}

