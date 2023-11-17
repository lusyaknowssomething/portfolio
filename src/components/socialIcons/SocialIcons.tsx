import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const SocialIcons = () => {
  return (
    <SocialList>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="gitHub" width="28px" height="28px" />
        </StyledLink>
      </SocialItem>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="linkedin" width="28px" height="28px" />
        </StyledLink>
      </SocialItem>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="telegram" width="28px" height="28px" />
        </StyledLink>
      </SocialItem>
      <SocialItem>
        <StyledLink href="#">
          <Icon iconId="instagram" width="28px" height="28px" />
        </StyledLink>
      </SocialItem>
    </SocialList>
  );
};

const SocialList = styled.ul`
  display: flex;
  list-style: none;
`;

const SocialItem = styled.li``;

const StyledLink = styled.a``;
