import { styled } from "styled-components";

export const Container = styled.div`
    padding-top: 15vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.div`
    width: 90vw;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input[type="file"]::file-selector-button {
        padding: 0.2rem 0.5rem;
        background: #fff;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
`;

export const StyledEditorWrapper = styled.div`
    .bn-editor {
        width: 90vw;
        height: 70vh;
        padding: 1rem;
        overflow-y: scroll;
    }
`;

export const Input = styled.input`
    width: 60vw;
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 0.5rem;

    font-size: 1.5rem;
    font-weight: bold;

    &:focus {
        outline: none;
    }
`;

export const SaveBtn = styled.div`
    width: 2.8rem;
    min-width: 2.8rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 0.5rem;
    color: gray;
    font-size: 0.8rem;

    cursor: pointer;

    &:hover {
        background-color: white;
        border-color: black;
        color: black;
    }
`;
