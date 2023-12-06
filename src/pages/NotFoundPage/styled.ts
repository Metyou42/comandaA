import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: 100vh;
`;

export const Description = styled.div`
    font-family: IBM Plex Sans;
    font-size: 18px;
`;

export const RedirectButton = styled(Button).attrs((prop) => ({
    color: prop.color ? prop.color : "primary",
    variant: "contained"
} as ButtonProps))`
    && {
        height: 38px;
        padding: 10px 16px;
        box-sizing: border-box;
        border-radius: 4px;
        font-family: IBM Plex Sans;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: center;
    }
`;
