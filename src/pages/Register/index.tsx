import React, { useEffect } from "react";
import { Button, Link, TextField } from "@mui/material";
import { BlockCenter } from "./styled";
import { BoxLogin } from "ui-components/BoxLogin/BoxLogin";

export function Register(): React.ReactElement {

    return (
        <BoxLogin
            text="Registration"
        >
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

            <Button
                variant="contained"
                size="large"
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
