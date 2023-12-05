import React, {useEffect, useState} from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import {Stack, Typography, Paper, ListItem, ListItemButton, ListItemText} from '@mui/material';
import { MainBoxText, StyledPaperMui } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import {ISubjectForLecturer, ISubjectNote} from "../../lib/axios/types";
import { getDeadLinesArchive } from "lib/axios/SubjectsNotes/requests";

export function Archive(): React.ReactElement {
    const selectedPanel: "Notebook" = "Notebook";
    
    const [deadLines, setDeadLines] = useState<ISubjectNote[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const deadLines = await getDeadLinesArchive();
                console.log(deadLines);
                
                setDeadLines(deadLines);
            } catch (error) {
                console.error('Error fetching lecturer data:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <MainBackGround>
            <PanelHeader picked={selectedPanel} />

            <MainContainer>
                <MainBoxText>
                    Archive
                </MainBoxText>

                <Stack
                    spacing={2}
                    sx={{
                        padding: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >
                    {deadLines.map((deadLine) => {
                        let deadLineDate = new Date(deadLine.date);
                        let day = deadLineDate.getDate();
                        let month = deadLineDate.getMonth() + 1;

                        return (
                            <TextLineBox text={`${day}.${month} - ${deadLine.subjectInTimeTable.subject.name} - ${deadLine.text}`} />
                        );
                    })}
                </Stack>
            </MainContainer>
        </MainBackGround>
    );
}

