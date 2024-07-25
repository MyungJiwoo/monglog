import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    padding-top: 10vh;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: #f8f8f8;

    .blogBox {
        width: 70vw;
        margin-top: 10vh;
        /* background-color: red; */

        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }
`;
