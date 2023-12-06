import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, IconButton, Box, ListItem, ListItemButton, ListItemText, List, Divider } from '@mui/material';
import { MainBoxText, StyledPaperMui, MainEmail, MainWork, BlockFlex, BlockFlexText, BlockFlexAdditional, BlockMargin } from "./styled";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {useHistory, useLocation} from "react-router-dom";
import { ISubjectForLecturer } from "../../lib/axios/types";
import { toastError } from "components/Toastify";
import { getLecturerById } from "lib/axios/Lecturers/requests";
import {isUserOwner} from "../../lib/axios/Students/requests";

export function Lecturer(): React.ReactElement {
    const history = useHistory();
    const selectedPanel: "Study" = "Study";
    const searchParams = new URLSearchParams(useLocation().search)
    const lectorId = searchParams.get("id")

    if (!lectorId) {
        return (
            <MainBackGround>
                <PanelHeader picked={selectedPanel} />

                <MainContainer>
                </MainContainer>
            </MainBackGround>
        );
    }

    const [fullName, setFullName] = useState<string>("");
    const [university, setUniversity] = useState<string>("");
    const [rank, setRank] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subjects, setSubjects] = useState<ISubjectForLecturer[]>([]);
    const [isLecturerOwner, setIsLecturerOwner] = useState<boolean>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lecturer = await getLecturerById(lectorId);
                const isOwner = await isUserOwner(lectorId, 0);
                console.log(lecturer);

                setIsLecturerOwner(isOwner);
                setFullName(lecturer.surname + " " + lecturer.name + " " + lecturer.patronymic);
                setUniversity(lecturer.educationalInstitution.name);
                setRank(lecturer.rank);
                setEmail(lecturer.email);
                setSubjects(lecturer.subjects);
            } catch (error) {
                console.error('Error fetching lecturer data:', error);
                toastError(error.message)
            }
        };

        fetchData();
    }, []);

    return (
        <MainBackGround>
            <PanelHeader picked={selectedPanel} />

            <MainContainer>

                <BlockFlex>
                    <BlockFlexText>
                        <p>{email}</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        {isLecturerOwner ? (
                            <IconButton>
                                <EditOutlinedIcon
                                    sx={{
                                        fontSize: 36,
                                        color: "white"
                                    }}
                                    onClick={() => history.push("/edit/subject?id=" + lectorId)}
                                />
                            </IconButton>
                        ) : null}
                    </BlockFlexAdditional>
                </BlockFlex>

                <BlockMargin>
                    <MainBoxText>
                        Викладач
                    </MainBoxText>
                    <MainBoxText>
                        {fullName}
                    </MainBoxText>
                    <MainWork>
                        Працює в: {university}
                    </MainWork>
                    <MainBoxText>
                        {rank}
                    </MainBoxText>

                    <Box
                        sx={{
                            width: '40%',
                            height: 300,
                            maxWidth: 360,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <List
                            sx={{
                                width: '100%',
                                bgcolor: '#8d98b8',
                                overflow: 'auto',
                                maxHeight: 300,
                            }}
                        >
                            {subjects.map((subject) => (
                                <ListItem disablePadding key={subject.id} onClick={() => history.push("/subject?id=" + subject.id)}>
                                    <ListItemButton>
                                        <ListItemText
                                            primary={`${subject.name}`}
                                            sx={{
                                                color: "white"
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </BlockMargin>
            </MainContainer>
        </MainBackGround>
    );
}

