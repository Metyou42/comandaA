import styled from "styled-components";

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 7px;
`;

export const Username = styled.div`
    width: 100%;
    color: rgba(255,255,255,0.87);
    text-align: center;
`;

export const ButtonContainer = styled.div`
    border: 1px solid transparent;
    display: flex;
    grid-column: 2;
    justify-content: space-between;
    grid-template-columns: repeat(4, 25%);
    background-color: #787474;
    border-radius: 0 0 2vh 2vh;
    width: 65%;

    align-items: center;
    height: 10vh;
    margin-top: -12px;
    margin-left: auto;
    margin-right: auto;

    img {
        width: 5vh;
        height: 5vh;
    }

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;

export const ButtonCustom = styled.div.attrs((props: { isSelected: boolean }) => ({
    isSelected: props.isSelected
}))`
    background-color: ${(props) => (props.isSelected ? 'lightblue' : 'transparent')};
    padding: 0.1vh;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
    border-radius: 0 0 2vh 2vh;

    &:hover {
        background-color: ${(props) => (props.isSelected ? 'lightblue' : "#948f8f")};
    }

    &:active {
        background-color: ${(props) => (props.isSelected ? 'lightblue' : "#b0abab")};
    }
`;

export const SupportButtonContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;

    align-items: right;
    height: 10vh;

    img {
        width: 5vh;
        height: 5vh;
    }
`;

export const SupportButtonCustom = styled.div`
    background-color: transparent;
    padding: 0.1vh;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
`;

export const HeadersImg = styled.img.attrs((props: { src: string }) => ({
    src: props.src
}))`
    width: 120px;
    height: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
    object-fit: contain;

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;