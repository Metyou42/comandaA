import React, { useEffect } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, TextField, Toolbar, Tooltip } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import { ButtonContainer, ButtonCustom, HeaderInfo, HeadersImg, SupportButtonContainer, SupportButtonCustom, Username } from "./styled";

export function PanelHeader(): React.ReactElement {

    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
        >
            {/* <Container > */}
            <Toolbar disableGutters>
                <Button
                    sx={{
                        display: "flex",
                        float: "left",
                        width: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                    }}
                >
                    <Tooltip title="Open settings">
                        <Avatar
                            alt="Remy Sharp"
                            sx={{ width: "5vh", height: "5vh" }}
                            src={Cat}
                        />
                    </Tooltip>

                    <HeaderInfo>
                        <Username>
                            {"Матвійчук Адрій"}
                        </Username>

                        <Username>
                            {"КБ-49"}
                        </Username>
                    </HeaderInfo>
                </Button>

                <ButtonContainer>
                    <ButtonCustom>
                        <HeadersImg src={Notebook} />
                    </ButtonCustom>

                    <ButtonCustom>
                        <HeadersImg src={Study} />
                    </ButtonCustom>

                    <ButtonCustom>
                        <HeadersImg src={Group} />
                    </ButtonCustom>

                    <ButtonCustom>
                        <HeadersImg src={Schedule} />
                    </ButtonCustom>
                </ButtonContainer>

                <SupportButtonContainer>
                    <SupportButtonCustom>
                        <HeadersImg src={Search} />
                    </SupportButtonCustom>

                    <SupportButtonCustom>
                        <HeadersImg src={Contact} />
                    </SupportButtonCustom>

                    <SupportButtonCustom>
                        <HeadersImg src={Settings} />
                    </SupportButtonCustom>

                    <SupportButtonCustom>
                        <HeadersImg src={LogOut} />
                    </SupportButtonCustom>
                </SupportButtonContainer>
            </Toolbar>
            {/* </Container> */}
        </AppBar>
    );
}

