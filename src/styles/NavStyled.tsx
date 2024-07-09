import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: center;

    position: fixed;

    background-color: #f8f8f8;

    .navbar {
        width: 70vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-family: "PeoplefirstFightingTTF";
        font-size: 2rem;
        letter-spacing: 3px;
        font-weight: bold;
    }

    .links {
        display: flex;
    }

    .link {
        margin-left: 5rem;
        font-family: "nanummyeongjo";
        font-weight: bolder;
        font-size: 1rem;
    }
`;
