import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockFlexCenter } from "./styled";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { REACT_APP_ACCESS_TOKEN_COOKIE_NAME, REACT_APP_BACKEND_URL } from "environmentVariables";
import { toastError } from "components/Toastify";
import { login } from "lib/axios/requests";
import Cookies from "js-cookie";

export function Login(): React.ReactElement {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const onLogin = async () => {
        if (email === "" || password === "") {
            toastError("Незаповнені поля")
            return
        }

        try {
            const accessToken = await login(email, password)

            const now = new Date();
            now.setTime(now.getTime() + 60 * 60 * 1000); // 1 hour

            Cookies.set(REACT_APP_ACCESS_TOKEN_COOKIE_NAME, accessToken, {
                path: "/",
                expires: now,
                domain: window.location.hostname,
                secure: window.location.protocol === 'https:' ? true : false,
                sameSite: 'strict',
            });
        } catch (error) {
            toastError(error.message)
        }
    }

    return (
        <BoxLogin
            text="Login"
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

            <TextField
                required
                id="outlined-required"
                label="Password"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value);
                }}
                sx={{
                    fontSize: "1.6vh",
                    width: "100%",
                    margin: "23px 0 0 0"
                }}
            />

            <BlockFlex>
                <FormControlLabel
                    sx={{ color: "white" }}
                    control={
                        <Checkbox
                            checked={rememberMe}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setRememberMe(event.target.checked);
                            }}
                        />
                    }
                    label="Запам'ятати мене?"
                />
                <Link
                    href="#"
                    sx={{
                        marginLeft: "auto",
                        marginTop: "auto",
                        marginBottom: "auto",
                        color: "white"
                    }}
                >
                    Забули пароль?
                </Link>
            </BlockFlex>

            <Button
                variant="contained"
                size="large"
                onClick={onLogin}
                sx={{
                    width: "100%",
                    marginTop: "23px"
                }}
            >
                Login
            </Button>

            <BlockFlexCenter>
                <span style={{ color: "white" }}>
                    Немає аккаунту?
                </span>
                <Link
                    href="#"
                    sx={{
                        marginLeft: "9px",
                        color: "white"
                    }}
                >
                    Зареєєструватись
                </Link>
            </BlockFlexCenter>
        </BoxLogin>
    );
}
