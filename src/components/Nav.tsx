import React from "react";
import { Container } from "../styles/NavStyled";
import { StyledLink } from "../styles/StyledLink";

const MainPage = () => {
    return (
        <Container>
            <div className="navbar">
                <StyledLink to={`/`}>
                    <p className="logo">monglog</p>
                </StyledLink>

                <div className="links">
                    <StyledLink to={`/posts`}>
                        <p className="link">Blog</p>
                    </StyledLink>

                    <StyledLink to={`/about`}>
                        <p className="link">About</p>
                    </StyledLink>
                </div>
            </div>
        </Container>
    );
};
export default MainPage;
