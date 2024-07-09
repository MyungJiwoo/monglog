import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: inherit;
    }
`;
