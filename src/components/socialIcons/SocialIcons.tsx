import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const SocialIcons = () => {
  return (
    <SocialList>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="gitHub" width="30px" height="30px" viewBox="0 0 30 30" />
        </StyledLink>
      </SocialItem>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="linkedin" width="32px" height="28px" viewBox="0 0 32 28" />
        </StyledLink>
      </SocialItem>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="telegram" width="30px" height="30px" viewBox="0 0 30 30" />
        </StyledLink>
      </SocialItem>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="instagram" width="31px" height="27px" viewBox="0 0 31 27" />
        </StyledLink>
      </SocialItem>
    </SocialList>
  );
};

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 54px;
  padding-bottom: 34px;
`;

const SocialItem = styled.li``;

const StyledLink = styled.a`
`;
