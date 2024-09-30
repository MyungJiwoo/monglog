import React, { useState, useEffect, useRef } from "react";
import * as S from "../styles/CreatePageStyled";

import { DatabaseReference, ref } from "firebase/database";
import { uid } from "uid";
import { db, storage } from "../firebase/firebase"; // db와 storage 가져오기
import { ref as dbRef, set } from "firebase/database"; // Realtime Database의 ref와 set 함수 가져오기
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
} from "firebase/storage"; // Storage의 ref와 uploadBytes 함수 가져오기

import { getAuth } from "firebase/auth";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    // const user = auth.currentUser;
    const [blog, setBlog] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState<File | null>(null);

    // * 사용자 확인
    // useEffect(() => {
    //     if (user) {
    //         console.log("사용자의 UID:", user.uid);
    //         console.log("사용자의 이메일:", user.email);
    //         // 필요한 사용자 정보를 가져와서 사용할 수 있습니다.
    //     } else {
    //         console.log("사용자가 로그인하지 않았습니다.");
    //         navigate("/");
    //     }
    // }, [navigate, user]);

    // * 블록 에디터 초기화
    const editor = useCreateBlockNote();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleBlogChange = async () => {
        if (editor) {
            const markdownContent = await editor.blocksToMarkdownLossy(
                editor.document
            );

            setBlog(markdownContent);
        }
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return null;
        setFile(files[0]);
    };

    // * 글 저장
    const saveData = async () => {
        console.log(blog);
        try {
            const uuid = uid();

            // 파일 업로드 후 URL 가져오기
            let imageUrl = "";
            if (file) {
                const storageReference = storageRef(storage, `files/${uuid}`);
                await uploadBytes(storageReference, file);
                // 업로드가 완료되면 다운로드 URL 가져오기
                imageUrl = await getDownloadURL(storageReference);
            }

            await set(ref(db, `blog/${uuid}`), {
                title: title,
                blog: blog,
                uuid,
                createdAt: new Date().toISOString(),
                imageUrl: imageUrl,
            });

            setTitle("");
            setBlog("");
            navigate("/posts");
            console.log("Data written successfully!");
        } catch (error) {
            console.error("Error writing data: ", error);
        }
    };

    return (
        <S.Container>
            <S.Header>
                <S.Input
                    type="text"
                    placeholder="제목을 입력하세요."
                    value={title}
                    onChange={handleTitleChange}
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                />
                <S.SaveBtn onClick={saveData}>SAVE</S.SaveBtn>
            </S.Header>

            <S.StyledEditorWrapper>
                <BlockNoteView
                    editor={editor}
                    onChange={handleBlogChange}
                    theme="light"
                />
            </S.StyledEditorWrapper>
        </S.Container>
    );
};

export default CreatePage;
