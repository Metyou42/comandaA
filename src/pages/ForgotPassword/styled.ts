import styled from "styled-components";

export const IdentityAreBox = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-image: radial-gradient(circle, rgba(96, 87, 87, 1)1%, rgba(0, 0, 0, 1) 50%);
    grid-row: 2;
    grid-column-start: 2;
    grid-column-end: 3;
`;

export const LoginBox = styled.div`
    background: rgba(20, 40, 108);
    box-shadow: 0 1vh 2.5vh rgba(0, 0, 0, 1);
    border-radius: 10px;
    height: 60vh;
    width: 42vh;
    border: black solid 1px;
    padding: 31px
`;

export const InformationBox = styled.div`
    text-align: center;
`;

export const BlockFlex = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BlockRight = styled.div`
    justify-content: right;
    margin-top: 24px;
    width: 100%;
`;

export const StuperLogo = styled.img.attrs((props: { src: string }) => ({
    src: props.src
}))`
    width: 120px;
    height: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
    object-fit: contain;
`;