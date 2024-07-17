import React from "react";
import { PostCard as PostCardStyle } from "../styles/PostCardStyeld";
import { StyledLink } from "../styles/StyledLink";
import { blogItem } from "../props/BlogProp";

const PostCard: React.FC<blogItem> = ({ blogItem }) => {
    return (
        <StyledLink to={`/detail/${blogItem.uuid}`}>
            <PostCardStyle>
                <div className="img"></div>
                <div className="titleBox">
                    <p className="post_title">{blogItem.title}</p>
                    <p className="post_preview">
                        {blogItem.subTitle.length > 40
                            ? blogItem.subTitle.slice(0, 40) + "..."
                            : blogItem.subTitle}
                    </p>
                </div>
            </PostCardStyle>
        </StyledLink>
    );
};
export default PostCard;
