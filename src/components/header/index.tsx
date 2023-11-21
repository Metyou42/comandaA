import React, {useEffect, useState} from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, TextField, Toolbar, Tooltip } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import { ButtonContainer, ButtonCustom, HeaderInfo, HeadersImg, SupportButtonContainer, SupportButtonCustom, Username } from "./styled";
import {getUser} from "../../lib/axios/requests";

export function PanelHeader(): React.ReactElement {

    const [name, setName] = useState<string>("");
    const [group, setGroup] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUser(undefined);
                console.log(user);

                setName(user.firstName + " " + user.lastName);
                setGroup(user.special + "-" + user.group)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);
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
                        width: "15%",
                        marginTop: "auto",
                        marginBottom: "auto",
                    }}
                >
                    <Tooltip title="Open profile">
                        <Avatar
                            alt="Remy Sharp"
                            sx={{ width: "5vh", height: "5vh" }}
                            src={Cat}
                        />
                    </Tooltip>

                    <HeaderInfo>
                        <Username>
                            {name}
                        </Username>

                        <Username>
                            {group}
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

