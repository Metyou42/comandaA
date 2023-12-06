import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockRight } from "./styled";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { useHistory } from "react-router-dom";
import { toastError } from "components/Toastify";

export function ForgotPassword(): React.ReactElement {
    const history = useHistory();

    const [email, setEmail] = useState<string>("");

    const onForgotPassword = async () => {
        if (email === "") {
            toastError("Незаповнені поля")
            return
        }

        try {
            // const accessToken = await login(email, password)

            // history.push("/")
        } catch (error) {
            toastError(error.message)
        }
    }

    return (
        <BoxLogin
            text="Forgot password ?"
        >
            <TextField
                required
                id="outlined-required"
                label="Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                }}
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
                onClick={onForgotPassword}
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