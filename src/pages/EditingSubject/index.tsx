import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { TextField, Button } from '@mui/material';
import { MainSubject, MainWork, FormInput } from "./styled";
import { useLocation } from "react-router-dom";
import { toastError, toastSuccess } from "components/Toastify";
import { FormInputBottom } from "pages/EditLecturer/styled";
import { getSubjectById, updateSubject } from "lib/axios/Subjects/requests";
import {isUserOwner} from "../../lib/axios/Students/requests";

export function EditSubject(): React.ReactElement {
    const searchParams = new URLSearchParams(useLocation().search)
    const subjectId = searchParams.get("id")
    const selectedPanel: "Study" = "Study";
    
    if (!subjectId) {
        return (
            <MainBackGround>
                <PanelHeader picked={selectedPanel} />

                <MainContainer>
                </MainContainer>
            </MainBackGround >
        );
    }

    const [isSubjectOwner, setIsSubjectOwner] = useState<boolean>(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const isOwner = await isUserOwner(subjectId, 1);
                setIsSubjectOwner(isOwner);
            } catch (error) {
                console.error('Error fetching subject data:', error);
                toastError(error.message)
            }
        };

        fetchData();
    }, []);

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        if (!isSubjectOwner) {
            const fetchData = async () => {
                try {
                    const subject = await getSubjectById(subjectId);
                    console.log(subject);

                    setName(subject.name);
                    setDescription(subject.description);
                } catch (error) {
                    console.error('Error fetching subject data:', error);
                }
            };

            fetchData();
        }
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
            <PanelHeader picked={selectedPanel} />

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

