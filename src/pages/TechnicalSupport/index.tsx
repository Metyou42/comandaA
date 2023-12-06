import React from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Button, TextField } from '@mui/material';
import {
    AnotherBoxText,
    BlockFlex,
    BlockNote,
    MainBoxText,
    VisuallyHiddenInput,
} from "./styled";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toastError, toastSuccess } from "components/Toastify";
import { sendSupportMail } from "lib/axios/Support/requests";

export function TechnicalSupport(): React.ReactElement {
    const [email, setEmail] = React.useState<string>("");
    const [text, setText] = React.useState<string>("");

    const hadleClick = async () => {
        try {
            await sendSupportMail(email, text)

            toastSuccess("Повідомлення було відправленно")
        } catch (error) {
            console.error('Error send message:', error);
            toastError(error.message)
        }
    }

    return (
        <MainBackGround>
            <PanelHeader picked="Contact" />
            <MainContainer>
                <BlockFlex>
                    <MainBoxText>Тех-підтримка STUPER</MainBoxText>
                </BlockFlex>
                <BlockFlex>
                    <AnotherBoxText>
                        Вкажіть пошту, на яку вам буде зручніше отримати відповідь
                    </AnotherBoxText>
                </BlockFlex>

                <BlockFlex>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Email"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                        sx={{
                            fontSize: "1.6vh",
                            width: "60%",
                        }}
                    />
                </BlockFlex>

                <BlockFlex>
                    <AnotherBoxText>
                        Опишіть що у Вас сталося. При потребі Ви також можете прикріпити фото
                    </AnotherBoxText>
                </BlockFlex>

                <BlockNote>
                    <TextField
                        placeholder="Нотатка"
                        multiline
                        rows={12}
                        maxRows={12}
                        value={text}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setText(event.target.value);
                        }}
                        sx={{
                            width: "100%",
                        }}
                    />

                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        sx={{
                            marginTop: "12px",
                        }}
                    >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                    </Button>
                </BlockNote>



                <BlockFlex>
                    <Button variant="contained" size="large" sx={{ marginTop: "2vh" }} onClick={hadleClick}>
                        Надіслати
                    </Button>
                </BlockFlex>
            </MainContainer>
        </MainBackGround >
    );
}

