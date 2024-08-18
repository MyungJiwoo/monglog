import React, { useState, useEffect } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import styled from "styled-components";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

const StyledEditorContainer = styled.div`
    .bn-editor {
        width: 30vw;
        height: 40vh;
        padding: 3rem;
        border-radius: 1rem;
    }
`;

const App: React.FC = () => {
    // Stores the editor's contents as Markdown.
    const [markdown, setMarkdown] = useState<string>("");

    // Creates a new editor instance with some initial content.
    const editor = useCreateBlockNote({});

    useEffect(() => {
        const updateContent = async () => {
            if (editor) {
                // Converts the editor's contents from Block objects to Markdown and store to state.
                const markdownContent = await editor.blocksToMarkdownLossy(
                    editor.document
                );
                setMarkdown(markdownContent);
            }
        };

        // Trigger content update on editor instance change or initial load
        updateContent();
    }, [editor]);

    const onChange = async () => {
        if (editor) {
            // Converts the editor's contents from Block objects to Markdown and store to state.
            const markdownContent = await editor.blocksToMarkdownLossy(
                editor.document
            );
            setMarkdown(markdownContent);
            console.log(markdownContent);
        }
    };

    if (!editor) return <div>Loading editor...</div>;

    // Renders the editor instance, and its contents as Markdown below.
    return (
        <StyledEditorContainer>
            <div className="item">
                <BlockNoteView editor={editor} onChange={onChange} />
            </div>
        </StyledEditorContainer>
    );
};

export default App;

// import React from "react";
// import styled from "styled-components";
// import "@blocknote/core/fonts/inter.css";
// import { useCreateBlockNote } from "@blocknote/react";
// import { BlockNoteView } from "@blocknote/mantine";
// import "@blocknote/mantine/style.css";

// // Styled component for customizing the editor container
// const StyledEditorContainer = styled.div`
//     .bn-editor {
//         width: 30vw;
//         height: 40vh;
//         padding: 3rem;
//         border-radius: 1rem;
//     }
// `;

// const MarkdownEditor: React.FC = () => {
//     const editor = useCreateBlockNote();

//     if (!editor) return <div>Loading editor...</div>;

//     return (
//         <StyledEditorContainer>
//             <BlockNoteView editor={editor} />
//         </StyledEditorContainer>
//     );
// };

// export default MarkdownEditor;
