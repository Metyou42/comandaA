import React, { useEffect } from "react";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";
import { Stack, Typography, Paper, Avatar, IconButton, Box, ListItem, ListItemButton, ListItemText, List, Divider } from '@mui/material';
import { MainBoxText, StyledPaperMui,MainEmail,MainWork, BlockFlex, BlockFlexText, BlockFlexAdditional, BlockMargin } from "./styled";
import { TextLineBox } from "components/TextLineBox";
import { Cat } from "assets";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export function Teacher(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>

                <BlockFlex>
                    <BlockFlexText>
                        <p>maksymenko.l@lpnu.ua</p>
                    </BlockFlexText>

                    <BlockFlexAdditional>
                        <IconButton>
                            <EditOutlinedIcon
                                sx={{
                                    fontSize: 36,
                                    color: "white"
                                }}
                            />
                        </IconButton>

                    </BlockFlexAdditional>
                </BlockFlex>
               
                <BlockMargin>
                    <MainBoxText>
                        Викладач
                    </MainBoxText>
                    <MainBoxText>
                        Максименко Лідія Анатоліївна
                    </MainBoxText>
                    <MainWork>
                        Працює в: Національний університет "Львівська Політехніка" 
                    </MainWork>
                    <MainBoxText> 
                        Доцент кафедри ІКТАІ, доктор наук......
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
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText 
                                        primary={`Item ${item}`}
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

