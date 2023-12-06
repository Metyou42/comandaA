import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar } from '@mui/material';
import { MainBoxText, StyledPaperMui, MainPhoto } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import { useLocation } from 'react-router-dom';
import { getUser, getUserById } from "lib/axios/Users/requests";

export function Profile(): React.ReactElement {
    const searchParams = new URLSearchParams(useLocation().search)
    const profileId = searchParams.get("id")

    const [name, setName] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [university, setUniversity] = useState<string>("");
    const [special, setSpecial] = useState<string>("");
    const [group, setGroup] = useState<string>("");
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(profileId);

                let user;

                if (profileId) {
                    user = await getUserById(profileId);
                }
                else {
                    user = await getUser();
                }
                console.log(user);

                setName(user.firstName + " " + user.lastName);
                setAvatar(user.avatar)
                setUniversity(user.university);
                setSpecial(user.special);
                setGroup(user.group);
                setYear(user.year);

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <MainBackGround>
            <PanelHeader picked="none" />

            <MainContainer>
                <MainBoxText>
                    Profile
                </MainBoxText>

                <MainPhoto>
                    <Avatar
                        alt="Remy Sharp"
                        sx={{ width: "150px", height: "150px" }}
                        src={avatar}
                    />
                </MainPhoto>

                <MainBoxText>
                    {name}
                </MainBoxText>
                <MainBoxText>
                    Університет: {university}
                </MainBoxText>
                <MainBoxText>
                    Спеціальність: {special}
                </MainBoxText>
                <MainBoxText>
                    Група: {group}
                </MainBoxText>

                <MainBoxText>
                    Рік вступу: {year}
                </MainBoxText>
            </MainContainer>
        </MainBackGround>
    );
}

