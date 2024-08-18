import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    padding-top: 10vh;
    height: 90vh;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;

    background-color: #f8f8f8;

    textarea {
        outline: none;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        resize: none;
        transition: width 0.3s ease;
        overflow-y: auto;
        border: none;
    }

    textarea:focus {
        outline: none;
    }
`;
