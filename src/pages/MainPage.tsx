import React from "react";
import { Container } from "../styles/MainPageStyled";
import PostCard from "../components/PostCard";

const MainPage = () => {
    return (
        <Container>
            <p className="title">Lastest</p>
            <p className="subTitle">가장 최근에 작성한 글입니다.</p>

            <div className="postBox">{/* <PostCard /> */}</div>
        </Container>
    );
};
export default MainPage;
