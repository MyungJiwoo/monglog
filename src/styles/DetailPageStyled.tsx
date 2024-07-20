import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    padding-top: 10vh;

    background-color: #f8f8f8;

    display: flex;
    flex-direction: column;
    align-items: center;

    .blogBox {
        width: 70vw;
        margin-top: 5vh;
    }

    .titleBox {
        display: flex;
    }

    .icon {
        margin-right: 0.3rem;
        font-size: 2rem;
    }

    .title {
        margin: 1rem 0 2rem 0;
        font-size: 2.2rem;
        font-weight: bold;
        font-family: "nanummyeongjo";
    }

    .content {
        width: 70vw;
        margin-bottom: 10vh;
        background-color: #f8f8f8;
    }
`;
