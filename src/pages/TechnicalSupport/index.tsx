import React from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Button, TextField } from '@mui/material';
import {
    AnotherBoxText,
    BlockFlex,
    MainBoxText,
} from "./styled";

export function TechnicalSupport(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />
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

                <BlockFlex>
                    <TextField
                        placeholder="Нотатка"
                        multiline
                        rows={12}
                        maxRows={12}
                        sx={{
                            width: "60%",
                        }}
                    />
                </BlockFlex>

                <BlockFlex>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            marginTop: "2vh",
                            marginLeft: "45%",
                            display: "block",
                        }}
                    >
                        Прикріпити фото
                    </Button>
                </BlockFlex>

                <BlockFlex>
                    <Button variant="contained" size="large" sx={{ marginTop: "2vh" }}>
                        Надіслати
                    </Button>
                </BlockFlex>
            </MainContainer>
        </MainBackGround>
    );
}

