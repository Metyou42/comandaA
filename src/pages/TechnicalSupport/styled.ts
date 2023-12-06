import styled from "styled-components";

export const MainBoxText = styled.p`
    text-align: center;
    color: white;
    font-family: Inter;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const AnotherBoxText = styled.p`
  text-align: center;
  color: white;
  font-family: Alice;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const BlockFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlockNote = styled.div`
  width: 60%;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
`;

export const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

