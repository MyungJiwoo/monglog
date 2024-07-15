import React, { useEffect, useState } from "react";
import { Container } from "../styles/WritePageStyeld";

import { ref, set } from "firebase/database";
import { uid } from "uid";
import { db } from "../firebase/firebase";
import { getAuth } from "firebase/auth";

import MDEditor from "@uiw/react-md-editor";

function WritePage() {
    const auth = getAuth();
    const user = auth.currentUser;
    const [blog, setBlog] = useState("");
    const [title, setTitle] = useState("");

    const handlTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleBlogChange = (value: string | undefined) => {
        setBlog(value || ""); // Markdown 에디터에서 입력한 내용을 상태에 저장
    };

    const writeData = async () => {
        // console.log(blog);
        try {
            const uuid = uid();
            await set(ref(db, `blog/${uuid}`), {
                title: title,
                blog: blog,
                uuid,
                createdAt: new Date().toISOString(),
            });
            setTitle("");
            setBlog("");
            console.log("Data written successfully!");
        } catch (error) {
            console.error("Error writing data: ", error);
        }
    };

    useEffect(() => {
        if (user) {
            console.log("사용자의 UID:", user.uid);
            console.log("사용자의 이메일:", user.email);
            // 필요한 사용자 정보를 가져와서 사용할 수 있습니다.
        } else {
            console.log("사용자가 로그인하지 않았습니다.");
        }
    }, [user]);

    return (
        <Container>
            <h1>글 작성</h1>

            <input
                type="text"
                placeholder="제목을 입력하세요."
                value={title}
                onChange={handlTitleChange}
            />

            <div className="markarea">
                <div data-color-mode="light">
                    <MDEditor
                        height={500}
                        value={blog}
                        onChange={handleBlogChange}
                    />
                </div>
            </div>

            <button onClick={writeData}>Submit</button>
        </Container>
    );
}

export default WritePage;
