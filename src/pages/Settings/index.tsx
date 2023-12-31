import React, {useEffect, useState} from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Button, Divider } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

import { BlockFlex } from "./styled";
import { MainBoxText } from "../Settings/styled";

import {getUser} from "../../lib/axios/Users/requests";

export function Settings(): React.ReactElement {
    const selectedPanel: "Settings" = "Settings";

    const [avatar, setAvatar] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await getUser();
                console.log(user);

                setAvatar(user.avatar);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <MainBackGround>
            <PanelHeader picked={selectedPanel} />
            <MainContainer>
                <BlockFlex>
                    <MainBoxText>Налаштування</MainBoxText>
                </BlockFlex>

                <Divider sx={{ bgcolor: "black", height: 5, width: "100%" }} />

                <BlockFlex>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: deepOrange[500],
                            color: "white",
                            fontSize: "2rem",
                            aspectRatio: 1,
                            borderRadius: "50%",
                            width: "200px",
                            backgroundImage: `url(${avatar})`,
                            backgroundSize: "cover",
                            margin: "50px"
                        }}
                    >
                        Змінити
                    </Button>
                </BlockFlex>

                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        marginTop: "2vh",
                        width: "100%",
                        justifyContent: "flex-start",
                        fontFamily: "Inter",
                        fontSize: "35px",
                    }}>
                    Змінити нікнейм
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        marginTop: "2vh",
                        width: "100%",
                        justifyContent: "flex-start",
                        fontFamily: "Inter",
                        fontSize: "35px",
                    }}>
                    Змінити пошту
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        marginTop: "2vh",
                        width: "100%",
                        justifyContent: "flex-start",
                        fontFamily: "Inter",
                        fontSize: "35px",
                    }}>
                    Змінити пароль
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        width: "64%",
                        justifyContent: "flex-start",
                        fontFamily: "Inter",
                        fontSize: "35px",
                        position: "absolute",
                        bottom: "0",
                        left: "18%",
                        right: "18%",
                        marginBottom: "20px"
                    }}
                >
                    Log Out
                </Button>
            </MainContainer>
        </MainBackGround>
    );
}
