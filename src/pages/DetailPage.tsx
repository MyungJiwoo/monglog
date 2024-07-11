import React, { useState, useEffect } from "react";
import { Container } from "../styles/DetailPageStyled";

import { ref, child, get } from "firebase/database";
import { db } from "../firebase/firebase";

import MDEditor from "@uiw/react-md-editor";

interface BlogItem {
    blog: string;
    uuid: string;
    createAt: string;
}

const DetailPage = () => {
    const dbRef = ref(db);
    const [blogList, setBlogList] = useState<BlogItem[]>([]);

    useEffect(() => {
        console.log("실행");
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

    const read = () => {
        console.log(blogList);
    };

    return (
        <Container>
            <button onClick={read}>read</button>
            {blogList.map((item, index) => (
                <div
                    key={index}
                    className="markdownDiv"
                    data-color-mode="light"
                    style={{ padding: 15 }}
                >
                    <MDEditor.Markdown
                        style={{ padding: 10 }}
                        source={item.blog}
                    />
                </div>
            ))}
        </Container>
    );
};
export default DetailPage;
