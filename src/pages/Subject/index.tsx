import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import {
    Stack,
    Typography,
    Paper,
    Avatar,
    IconButton,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import { MainBoxText, StyledPaperMui, MainSubject, MainWork, MainAbout, BlockFlex, BlockFlexText, BlockFlexAdditional, BlockMargin } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {useHistory, useLocation} from "react-router-dom";
import { ILecturerForSubject } from "../../lib/axios/types";
import { toastError } from "components/Toastify";
import { getSubjectById } from "../../lib/axios/Subjects/requests";
import {isUserOwner} from "../../lib/axios/Students/requests";

export function Subject(): React.ReactElement {
    const history = useHistory();
    const selectedPanel: "Study" = "Study";
    const searchParams = new URLSearchParams(useLocation().search)
    const subjectId = searchParams.get("id")

    if (!subjectId) {
        return (
            <MainBackGround>
                <PanelHeader picked={selectedPanel} />

                <MainContainer>
                </MainContainer>
            </MainBackGround>
        );
    }

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [lecturers, setLecturers] = useState<ILecturerForSubject[]>([]);
    const [isSubjectOwner, setIsSubjectOwner] = useState<boolean>(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const subject = await getSubjectById(subjectId);
                const isOwner = await isUserOwner(subjectId, 1);
                console.log(subject);

                setIsSubjectOwner(isOwner);
                setName(subject.name);
                setDescription(subject.description);
                setLecturers(subject.lecturers);
            } catch (error) {
                console.error('Error fetching subject data:', error);
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
                    <BlockFlexAdditional>
                        {isSubjectOwner ? (
                            <IconButton>
                                <EditOutlinedIcon
                                    sx={{
                                        fontSize: 36,
                                        color: "white"
                                    }}
                                    onClick={() => history.push("/edit/subject?id=" + subjectId)}
                                />
                            </IconButton>
                        ) : null}
                    </BlockFlexAdditional>
                </BlockFlex>

                <BlockMargin>
                    <MainSubject>
                        Предмет
                    </MainSubject>
                    <MainSubject>
                        {name}
                    </MainSubject>

                    <MainWork>{description}</MainWork>


                    <MainSubject>
                        Викладачі:
                    </MainSubject>
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
                            {lecturers.map((lecturer) => (
                                <ListItem disablePadding key={lecturer.id} onClick={() => history.push("/lecturer?id=" + lecturer.id)}>
                                    <ListItemButton>
                                        <ListItemText
                                            primary={`${lecturer.surname + " " + lecturer.name + " " + lecturer.patronymic}`}
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

function getSubject(subjectId: string) {
    throw new Error("Function not implemented.");
}

