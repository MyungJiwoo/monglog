import React, { useState, useEffect } from "react";
import { marked } from "marked";
import { Container } from "../styles/AutoSavePageStyled";
import MarkdownEditor from "../components/MarkdownEditor";

const AutoSavePage = () => {
    return (
        <Container>
            <h1>여기에 글을 작성하세요.</h1>
            <MarkdownEditor />
        </Container>
    );
};

export default AutoSavePage;
