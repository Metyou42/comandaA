import React, { useEffect } from "react";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockRight } from "./styled";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";

export function ForgotPassword(): React.ReactElement {

    return (
        <BoxLogin
            text="Forgot password ?"
        >
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

            <Box
                sx={{
                    display: "flex",
                    minWidth: "340px",
                }}>

                <Link
                    href="#"
                    sx={{
                        marginLeft: "auto",
                        marginTop: "12px",
                        color: "white"
                    }}
                >
                    Contact technical support
                </Link>
            </Box>

            <Button
                variant="contained"
                size="large"
                sx={{
                    width: "100%",
                    marginTop: "23px"
                }}
            >
                Send Reset Email
            </Button>
        </BoxLogin>
    );
}