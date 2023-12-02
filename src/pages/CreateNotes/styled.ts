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
    marginRight: "18px",
    height: "56px",
    width: "140px",
    justifyContent: "center"
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

export const BlockFlexJustify = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    height: 6vh;
`;

export const BlockFlexJustifyMargin = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const BlockFlexJustifyMarginCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 40px;
    margin-bottom: 10px;
`;


