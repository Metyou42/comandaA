import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Button, ButtonGroup, Checkbox, Container, FormControlLabel, IconButton, Link, TextField, Toolbar, Tooltip } from "@mui/material";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { Cat, Contact, Group, LogOut, Notebook, Schedule, Search, Settings, Study } from "assets";
import { ButtonContainer, ButtonCustom, HeaderInfo, HeadersImg, SupportButtonContainer, SupportButtonCustom, Username } from "./styled";
import { useHistory } from "react-router-dom";
import { useCookie } from "contexts/cookieContext";
import { REACT_APP_ACCESS_TOKEN_COOKIE_NAME } from "environmentVariables";
import { getUser } from "lib/axios/Users/requests";

interface PanelHeaderProps {
    picked: "Notebook" | "Study" | "Group" | "Schedule" | "Search" | "Contact" | "Settings" | "LogOut" | "none"
}

export function PanelHeader({ picked }: PanelHeaderProps): React.ReactElement {
    const history = useHistory();
    const { removeCookie } = useCookie();

    const onClickAvatar = () => {
        history.push("/profile")
    }

    const onClickGroup = () => {
        history.push("/group/students")
    }

    const onStudy = () => {
        history.push("/group/subjects")
    }
    const onClickTimeTable = () => {
        history.push("/TimeTable")
    }

    const onClickNotes = () => {
        history.push("/Notes")
    }

    const onClickSupport = () => {
        history.push("/technicalsupport")
    }

    const onClickSearch = () => {
        history.push("/search")
    }

    const onClickSettings = () => {
        history.push("/settings")
    }

    const onClickLogout = () => {
        removeCookie(REACT_APP_ACCESS_TOKEN_COOKIE_NAME)
        history.push("/login")
    }

    const [name, setName] = useState<string>("");
    const [group, setGroup] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUser();
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
                    onClick={onClickAvatar}
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
                            {name}
                        </Username>

                        <Username>
                            {group}
                        </Username>
                    </HeaderInfo>

                </Button>

                <ButtonContainer>
                    <ButtonCustom
                        isSelected={picked === "Notebook" ? true : false}
                        onClick={onClickNotes}
                    >
                        <HeadersImg src={Notebook} />
                    </ButtonCustom>

                    <ButtonCustom
                        isSelected={picked === "Study" ? true : false}
                        onClick={onStudy}
                    >
                        <HeadersImg src={Study} />
                    </ButtonCustom>

                    <ButtonCustom
                        isSelected={picked === "Group" ? true : false}
                        onClick={onClickGroup}
                    >
                        <HeadersImg src={Group} />
                    </ButtonCustom>

                    <ButtonCustom
                        isSelected={picked === "Schedule" ? true : false}
                        onClick={onClickTimeTable}
                    >
                        <HeadersImg src={Schedule} />
                    </ButtonCustom>
                </ButtonContainer>

                <SupportButtonContainer>
                    <SupportButtonCustom>
                        <HeadersImg src={Search} onClick={onClickSearch} />
                    </SupportButtonCustom>

                    <SupportButtonCustom>
                        <HeadersImg src={Contact} onClick={onClickSupport} />
                    </SupportButtonCustom>

                    <SupportButtonCustom>
                        <HeadersImg src={Settings} onClick={onClickSettings} />
                    </SupportButtonCustom>

                    <SupportButtonCustom>
                        <HeadersImg
                            src={LogOut}
                            onClick={onClickLogout}
                        />
                    </SupportButtonCustom>
                </SupportButtonContainer>
            </Toolbar>
            {/* </Container> */}
        </AppBar>
    );
}

