import React from "react";
import styled from "styled-components";
import { SocialIcons } from "../../components/socialIcons/SocialIcons";
import { FlexWrapper } from "../../components/FlexWrapper";

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

const StyledFooter = styled.footer``;

const Text = styled.span``;

const Copyright = styled.small``;
