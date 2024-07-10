import styled from "styled-components";

export const PostCard = styled.div`
    width: 20vw;

    border: 1px solid #f2f2f2;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.05));

    cursor: pointer;
    transition: all 0.3s ease-in-out;

    .img {
        width: inherit;
        height: 20vh;

        background-color: #505050;
        border-radius: 1rem 1rem 0 0;
    }

    .titleBox {
        width: calc(inherit - 2rem);
        padding: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        background-color: white;
        border-radius: 0 0 1rem 1rem;
    }

    .post_title {
        font-family: "nanummyeongjo";
        font-size: 1.1rem;
        font-weight: bold;
        color: #686868;
    }

    .post_preview {
        font-family: "nanummyeongjo";
        font-size: 0.9rem;
        color: #bdbdbd;
        margin-top: 0.3rem;
    }

    &:hover {
        transform: scale(1.02);
        transform: translate(0, -0.3rem);
    }
`;
