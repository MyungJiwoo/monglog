import React, { useState, useEffect } from "react";
import { Container } from "../styles/DetailPageStyled";

import { useParams } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import { db } from "../firebase/firebase";

import MDEditor from "@uiw/react-md-editor";

interface BlogItem {
    title: string;
    blog: string;
    uuid: string;
    createdAt: string;
}

const ReadPage = () => {
    const { uuid } = useParams<{ uuid: string }>();

    const dbRef = ref(db);
    const [blogList, setBlogList] = useState<BlogItem[]>([]);
    const [blog, setBlog] = useState<BlogItem | null>(null);

    useEffect(() => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, "/blog"))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const dataArray: BlogItem[] = Object.keys(
                        snapshot.val()
                    ).map((key) => snapshot.val()[key]);

                    console.log(dataArray);

                    console.log(uuid);

                    const filteredBlog = dataArray.find(
                        (blogItem) => blogItem.uuid === uuid
                    );
                    if (filteredBlog) {
                        setBlog(filteredBlog);
                    } else {
                        console.log("No matching blog found");
                    }
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [uuid]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>{blog.title}</h1>
            <MDEditor.Markdown style={{ padding: 10 }} source={blog.blog} />
        </Container>
    );
};
export default ReadPage;
