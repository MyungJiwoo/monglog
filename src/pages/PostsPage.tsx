import React, { useState, useEffect } from "react";
import { Container } from "../styles/PostsPageStyled";
import { StyledLink } from "../styles/StyledLink";

import { BlogItem } from "../props/BlogProp";

import { ref, child, get } from "firebase/database";
import { db } from "../firebase/firebase";

const PostsPage = () => {
    const dbRef = ref(db);
    const [blogList, setBlogList] = useState<BlogItem[]>([]);

    useEffect(() => {
        const fetchInterest = async () => {
            get(child(dbRef, "/blog"))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        const dataArray = Object.keys(snapshot.val()).map(
                            (key) => snapshot.val()[key]
                        );
                        console.log(dataArray);
                        setBlogList(dataArray);
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
            {blogList.map((item, index) => (
                <div
                    key={index}
                    className="markdownDiv"
                    data-color-mode="light"
                    style={{ padding: 15 }}
                >
                    <StyledLink to={`/read/${item.uuid}`}>
                        <h2>{item.title}</h2>
                    </StyledLink>
                </div>
            ))}
        </Container>
    );
};
export default PostsPage;
