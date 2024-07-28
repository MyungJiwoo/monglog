import styled from "styled-components";

export const Container = styled.div`
    width: 70vw;
    padding-top: 10vh;
    height: 90vh;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .title_background {
        width: 25rem;
        height: 3rem;
        border-radius: 0 3rem 3rem 0;
        background-color: #ff15e8;
        position: relative;
        top: 4.5rem;

        opacity: 0.1;
    }

    .title {
        font-family: "PeoplefirstFightingTTF";
        font-size: 3rem;
        color: #ff15e8;
    }

    .subTitle {
        margin-top: 1rem;

        font-family: "PeoplefirstNeatLoudTTF";
        font-size: 1.5rem;
        color: #8f8f8f;
    }

    .postBox {
        margin-top: 3vw;
    }
`;
