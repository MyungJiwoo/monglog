import React from "react";
import { PostCard as PostCardStyle } from "../styles/PostCardStyeld";
import { StyledLink } from "../styles/StyledLink";

const PostCard = () => {
    return (
        <PostCardStyle>
            <div className="img"></div>
            <div className="titleBox">
                <p className="post_title">제목이 들어갈 자리입니다.</p>
                <p className="post_preview">미리보기가 들어갈 자리입니다.</p>
            </div>
        </PostCardStyle>
    );
};
export default PostCard;
