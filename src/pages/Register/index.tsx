import React, { useEffect } from "react";
import { Button, Checkbox, FormControlLabel, Link, TextField } from "@mui/material";
import { BlockCenter, BlockFlex, BlockFlexCenter, IdentityAreBox, InformationBox, LoginBox, StuperLogo } from "./styled";
import { Logo } from "assets";

export function Register(): React.ReactElement {

    return (
        <IdentityAreBox>
            <LoginBox>
                <StuperLogo src={Logo} />
                <InformationBox>
                    <h2 style={{ color: "white" }}>STUPER</h2>
                    <h3 style={{ color: "white" }}>Registration</h3>
                </InformationBox>

                <TextField
                    required
                    id="outlined-required"
                    label="Enter your Email"
                    sx={{
                        fontSize: "1.6vh",
                        width: "100%",
                    }}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Enter your University Email"
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
                    sx={{
                        fontSize: "1.6vh",
                        width: "100%",
                        margin: "23px 0 0 0"
                    }}
                />
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
            </LoginBox>
        </IdentityAreBox>
    );
}
