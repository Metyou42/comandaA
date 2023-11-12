import React, { useEffect } from "react";
import { AppBar, Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockFlexCenter } from "./styled";
import { PanelHeader } from "components/header";
import { MainBackGround } from "ui-components/MainCss/MainCSS";
import { MainContainer } from "ui-components/MainContainer/MainContainer";

export function Notes(): React.ReactElement {

    return (
        <MainBackGround>
            <PanelHeader />

            <MainContainer>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue="Email"
                    sx={{
                        fontSize: "1.6vh",
                        width: "100%",
                        margin: "23px 0 0 0"
                    }}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    defaultValue="Password"
                    sx={{
                        fontSize: "1.6vh",
                        width: "100%",
                        margin: "23px 0 0 0"
                    }}
                />
            </MainContainer>
        </MainBackGround>
    );
}

