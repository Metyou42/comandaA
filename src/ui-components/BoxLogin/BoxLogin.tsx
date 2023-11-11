import React, { ReactChildren, ReactElement, ReactNode, useEffect } from "react";
import { Box } from "@mui/material";
import { IdentityAreBox, InformationBox, StuperLogo } from "./styled";
import { Logo } from "assets";

interface BoxLoginType {
    children: ReactChildren | ReactNode | ReactElement;
    text: string
}

export function BoxLogin({ children, text }: BoxLoginType): React.ReactElement {
    return (
        <IdentityAreBox>
            <Box
                sx={{
                    background: "rgba(20, 40, 108)",
                    boxShadow: "0 1vh 2.5vh rgba(0, 0, 0, 1)",
                    borderRadius: "10px",
                    border: "black solid 1px",
                    padding: "31px",
                    maxWidth: "340px"
                }}
            >
                <StuperLogo src={Logo} />

                <InformationBox>
                    <h2 style={{ color: "white" }}>STUPER</h2>
                    <h3 style={{ color: "white" }}>{text}</h3>
                </InformationBox>

                {children}
            </Box>
        </IdentityAreBox>
    );
}

