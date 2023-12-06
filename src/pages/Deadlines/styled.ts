import { Paper } from "@mui/material";
import styled from "styled-components";

export const MainBoxText = styled.p`
    text-align: center;
    color: white;
`;

export const StyledPaperMui = {
    backgroundColor: 'rgba(83, 59, 119, 0.5)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: "15px",
    height: '70px'
};

// export const BlockFlex = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

export const BlockFlex = styled.div`
    text-align: center;
    height: 50px;
    position: relative;
`;

export const BlockFlexText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

export const BlockFlexAdditional = styled.div`
    position: absolute;
    right: 0;
    top: 56%;
    transform: translate(0, -50%);
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
`;