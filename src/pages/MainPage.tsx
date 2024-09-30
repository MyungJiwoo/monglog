import React, { useEffect, useState } from "react";
import { Container } from "../styles/MainPageStyled";
import PostCard from "../components/PostCard";
import { child, get, ref, query, limitToLast } from "firebase/database";
import { db } from "../firebase/firebase";
import { BlogItem } from "../props/BlogProp";

const MainPage = () => {
    const dbRef = ref(db);
    const [blogList, setBlogList] = useState<BlogItem[]>([]);

    useEffect(() => {
        const fetchInterest = async () => {
            // query()와 limitToLast()를 사용하여 마지막 3개의 데이터를 가져옴
            const dbQuery = query(child(dbRef, "/blog"), limitToLast(3));

            get(dbQuery)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const dataArray = Object.keys(snapshot.val()).map(
                            (key) => snapshot.val()[key]
                        );
                        console.log(dataArray);
                        setBlogList(dataArray); // 데이터를 그대로 설정
                    } else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        fetchInterest();
    }, []);

    return (
        <Container>
            <p className="title">Lastest</p>
            <p className="subTitle">가장 최근에 작성한 글입니다.</p>

            <div className="postBox">
                {blogList.map((item, index) => (
                    <div
                        key={index}
                        className="markdownDiv"
                        data-color-mode="light"
                        style={{ padding: 15 }}
                    >
                        <PostCard blogItem={item} />
                    </div>
                ))}
            </div>
        </Container>
    );
};
export default MainPage;
