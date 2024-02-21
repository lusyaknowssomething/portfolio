import styled from "styled-components";
import { theme } from "../../styles/Theme";

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  padding-bottom: 34px;
`;

const SocialItem = styled.li``;

const StyledLink = styled.a`
  color: ${theme.colors.font};

  &:hover {
    color: ${theme.colors.accent};
  }
`;

export const S = {
  SocialList,
  SocialItem,
  StyledLink,
}