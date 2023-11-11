import React, { useEffect } from "react";
import { Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockFlex, BlockFlexCenter, IdentityAreBox, InformationBox, LoginBox, StuperLogo } from "./styled";
import { Logo } from "assets";

export function Login(): React.ReactElement {

    return (
        <IdentityAreBox>
            <LoginBox>
                <StuperLogo src={Logo} />
                <InformationBox>
                    <h2 style={{ color: "white" }}>STUPER</h2>
                    <h3 style={{ color: "white" }}>Вхід</h3>
                </InformationBox>

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

                <BlockFlex>
                    <FormControlLabel sx={{ color: "white" }} control={<Checkbox defaultChecked />} label="Зпамятати мене?" />
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
            </LoginBox>
        </IdentityAreBox>
    );
}

