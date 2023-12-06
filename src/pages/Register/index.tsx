import React, { useEffect, useState } from "react";
import { Button, Link, TextField } from "@mui/material";
import { BlockCenter } from "./styled";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { useHistory } from "react-router-dom";
import { toastError } from "components/Toastify";

export function Register(): React.ReactElement {
    const history = useHistory();

    const [email, setEmail] = useState<string>("");
    const [emailU, setEmailU] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    const onRegister = async () => {
        if (password === "" || password2 === "" || email === "" || emailU === "") {
            toastError("Незаповнені поля")
            return
        } else if (password !== password2) {
            toastError("Неспіпадають паролі")
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
            text="Registration"
        >
            <TextField
                required
                id="outlined-required"
                label="Enter your Email"
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmailU(event.target.value);
                }}
                sx={{
                    fontSize: "1.6vh",
                    width: "100%",
                }}
            />

            <TextField
                required
                id="outlined-required"
                label="Enter your University Email"
                value={emailU}
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
                label="Create your password"
                value={password2}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(event.target.value);
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
                label="Enter your password again"
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword2(event.target.value);
                }}
                sx={{
                    fontSize: "1.6vh",
                    width: "100%",
                    margin: "23px 0 0 0"
                }}
            />

            <Button
                variant="contained"
                size="large"
                onClick={onRegister}
                sx={{
                    width: "100%",
                    marginTop: "23px"
                }}
            >
                Registration
            </Button>

            <BlockCenter>
                <Link
                    href="#"
                    sx={{
                        color: "white",
                        left: "50%",
                    }}
                >
                    Прочитати умови
                </Link>
            </BlockCenter>
        </BoxLogin>
    );
}
