import React, { useEffect } from "react";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockFlexCenter } from "./styled";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";

export function NewPassword(): React.ReactElement {

    return (
        <BoxLogin
            text=""
        >
            <TextField
                required
                id="outlined-required"
                label="Create your password"
                defaultValue="New Password"
                sx={{
                    fontSize: "1.6vh",
                    width: "100%",
                    margin: "23px 0 0 0"
                }}
            />

            <TextField
                required
                id="outlined-required"
                label="Please enter your password again"
                defaultValue="New Password"
                sx={{
                    fontSize: "1.6vh",
                    width: "100%",
                    margin: "23px 0 0 0"
                }}
            />

            <Button
                variant="contained"
                size="large"
                sx={{
                    width: "100%",
                    marginTop: "23px"
                }}
            >
                Change password
            </Button>

        </BoxLogin>
    );
}

