import React from "react";
import styled from "styled-components";
import photoMain from "../../../assets/images/photos/For-main.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SocialIcons } from "../../../components/socialIcons/SocialIcons";
import { Button } from "../../../components/Button";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-between">
        <div>
          <span>Hello! I’m</span>
          <span>Khatanzeyskaya Lyudmila</span>
          <MainTitle>Frontend Developer</MainTitle>
          <SocialIcons />
          <Button>HIRE ME</Button>
        </div>
        <Photo src={photoMain} alt="lyudmila" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-color: #ffbcbc
`

const MainTitle = styled.h1`
  
`

const Photo = styled.img`
  width: 583px;
  height: 772px;
  object-fit: cover;
`;
