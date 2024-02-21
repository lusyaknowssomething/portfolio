import React from "react";
import { SocialIcons } from "../../components/socialIcons/SocialIcons";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "./Footer_Styles"

export const Footer: React.FC = () => {
  return (
    <S.StyledFooter>
      <FlexWrapper justify="center" direction="column" align="center">
        <S.Text>YOU CAN FIND ME HERE:</S.Text>
        <SocialIcons />
        <S.Copyright>
          © 2023 Lyudmila Khatanzeyskaya, All rights reserved
        </S.Copyright>
      </FlexWrapper>
    </S.StyledFooter>
  );
};

