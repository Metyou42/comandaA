import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { TextField, Button } from '@mui/material';
import { MainSubject, MainWork, FormInput, SubWork, BlockFlex } from "./styled";
import { useLocation } from "react-router-dom";
import { toastError, toastSuccess } from "components/Toastify";
import { FormInputBottom } from "pages/EditLecturer/styled";
import { createClassGroup } from "lib/axios/ClassGroups/requests";

export function CreateGroup(): React.ReactElement {
    const selectedPanel: "Group" = "Group";
    const [name, setName] = useState<string>("");
    const [numberGroup, setNumberGroup] = useState<string>("");

    const createClassGroupHandle = async () => {
        try {
            const res = await createClassGroup(`${name} ${numberGroup}`)
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
                    Створення групи
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
                    <BlockFlex>
                        <TextField
                            id="outlined-basic"
                            label="Посилання на сторінку предмету у ВНС"
                            variant="outlined"
                            sx={{
                                width: "40%",
                                marginTop: "8px"
                            }}
                            value={numberGroup}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setNumberGroup(event.target.value);
                            }}
                        />

                        <SubWork>
                            якщо у вас група 21, вказуйте цифру 1 (36 - цифру 6)
                        </SubWork>
                    </BlockFlex>

                </FormInput>

                <FormInputBottom>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={createClassGroupHandle}
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

