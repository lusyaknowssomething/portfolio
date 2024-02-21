import React from "react";
import styled from "styled-components";
import { SocialIcons } from "../../components/socialIcons/SocialIcons";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify="center" direction="column" align="center">
        <Text>YOU CAN FIND ME HERE:</Text>
        <SocialIcons />
        <Copyright>
          © 2023 Lyudmila Khatanzeyskaya, All rights reserved
        </Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
`;

const Text = styled.span`
  font-weight: 700px;
  font-size: 18px;
  margin-bottom: 30px;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
