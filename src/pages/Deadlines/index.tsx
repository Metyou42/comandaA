import React, {useEffect, useState} from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, FormControlLabel, Checkbox, Button, IconButton } from '@mui/material';
import { BlockFlex, BlockFlexAdditional, BlockFlexText, MainBoxText, StyledPaperMui } from "./styled";
import FlagIcon from '@mui/icons-material/Flag';
import { red, green, yellow } from '@mui/material/colors';
import { DeadlinesCheckBox } from "components/DeadlinesCheckBox";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {ISubjectNote} from "../../lib/axios/types";
import {getDeadLines} from "../../lib/axios/requests";
import {TextLineBox} from "../../components/TextLineBox";

export function Deadlines(): React.ReactElement {

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
            <PanelHeader />

            <MainContainer>

                <BlockFlex>
                    <BlockFlexText>
                        <p>Deadlines</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        <Button variant="outlined" sx={{ marginLeft: "auto", marginRight: "24px" }}>Outlined</Button>
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
                        let checked: "Option 1" | "Option 2" | "Option 3" = "Option 1";

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

                        checked = `Option ${deadLine.status + 1}` as "Option 1" | "Option 2" | "Option 3";

                        return (
                            <DeadlinesCheckBox
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

