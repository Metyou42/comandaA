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

export const InformationBox = styled.div`
    text-align: center;
`;