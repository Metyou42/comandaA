import React, { useEffect, useState } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ISubjectNote } from "../../lib/axios/types";
import { TextLineBox } from "../../components/TextLineBox";
import { getDeadLines } from "lib/axios/SubjectsNotes/requests";

export function Deadlines(): React.ReactElement {
    const selectedPanel: "Notebook" = "Notebook";

    const [deadLines, setDeadLines] = useState<ISubjectNote[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const deadLines = await getDeadLines();
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

                <BlockFlex>
                    <BlockFlexText>
                        <p>Deadlines</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        <Button variant="outlined" sx={{ marginLeft: "auto", marginRight: "24px" }}>Архів</Button>
                        <IconButton>
                            <InfoOutlinedIcon
                                sx={{
                                    fontSize: 36,
                                    color: "white"
                                }}
                            />
                        </IconButton>

                    </BlockFlexAdditional>
                </BlockFlex>


                <Stack
                    spacing={2}
                    sx={{
                        padding: '10px',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }}
                >
                    {deadLines.map((deadLine) => {
                        const deadLineDate = new Date(deadLine.date);
                        const day = deadLineDate.getDate();
                        const month = deadLineDate.getMonth() + 1;

                        let color: "green" | "red" | "yellow" = "red";
                        let checked: 1 | 2 | 3 = 1;

                        const currentDate = new Date();
                        const twoWeeksFromNow = new Date(currentDate);
                        twoWeeksFromNow.setDate(currentDate.getDate() + 14);

                        switch (true) {
                            case deadLineDate > twoWeeksFromNow:
                                color = "green";
                                break;
                            case deadLineDate < currentDate:
                                color = "red";
                                break;
                            default:
                                color = "yellow";
                                break;
                        }


                        checked = deadLine.status + 1 as 1 | 2 | 3;

                        return (
                            <DeadlinesCheckBox
                                id={deadLine.id}
                                text={`${day}.${month} - ${deadLine.subjectInTimeTable.subject.name} - ${deadLine.text}`}
                                color={color}
                                checked={checked}
                            />
                        );
                    })}
                </Stack>

            </MainContainer>
        </MainBackGround>
    );
}

