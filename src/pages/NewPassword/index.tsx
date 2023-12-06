import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockFlexCenter } from "./styled";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";
import { useHistory } from "react-router-dom";
import { toastError } from "components/Toastify";

export function NewPassword(): React.ReactElement {
    const history = useHistory();

    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");

    const onNewPass = async () => {
        if (password === "" || password2 === "") {
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
            text=""
        >
            <TextField
                required
                id="outlined-required"
                label="Create your password"
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

            <TextField
                required
                id="outlined-required"
                label="Please enter your password again"
                value={password2}
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
                onClick={onNewPass}
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

