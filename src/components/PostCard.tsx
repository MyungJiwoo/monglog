import React from "react";
import { PostCard as PostCardStyle } from "../styles/PostCardStyeld";
import { StyledLink } from "../styles/StyledLink";
import { BlogItem } from "../props/BlogProp";

export interface blogItemProps {
    blogItem: BlogItem; // blogItem의 타입을 BlogItem으로 설정
}

const PostCard = ({ blogItem }: blogItemProps) => {
    return (
        <StyledLink to={`/detail/${blogItem.uuid}`}>
            <PostCardStyle>
                {blogItem.imageUrl && (
                    <img src={blogItem.imageUrl} alt="썸네일" />
                )}
                <div className="titleBox">
                    <p className="post_title">{blogItem.title}</p>
                    <p className="post_preview">
                        {blogItem.blog.length > 40
                            ? blogItem.blog.slice(0, 40) + "..."
                            : blogItem.blog}
                    </p>
                </div>
            </PostCardStyle>
        </StyledLink>
    );
};
export default PostCard;
