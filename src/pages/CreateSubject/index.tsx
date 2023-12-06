import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { TextField, Button } from '@mui/material';
import { MainSubject, MainWork, FormInput } from "./styled";
import { useLocation } from "react-router-dom";
import {createSubject, getSubjectById, updateSubject} from "lib/axios/Subjects/requests";
import { toastError, toastSuccess } from "components/Toastify";
import { FormInputBottom } from "pages/EditLecturer/styled";

export function CreateSubject(): React.ReactElement {
    const selectedPanel: "Study" = "Study";

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const createSubjectHandle = async () => {
        try {
            const res = await createSubject(name, description)
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
            <PanelHeader picked={selectedPanel} />

            <MainContainer>

                <MainSubject>
                    Створення профілю предмету
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
                        onClick={createSubjectHandle}
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

