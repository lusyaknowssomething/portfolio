import React from "react";
import styled from "styled-components";
import photoMain from "../../../assets/images/photos/For-main.png";
import Graphic from "../../../assets/images/graphics/Vector_dotted.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SocialIcons } from "../../../components/socialIcons/SocialIcons";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <div>
            <SmallText>Hello! I’m</SmallText>
            <Name>Khatanzeyskaya Lyudmila</Name>
            <MainTitle>Frontend <Mask>Developer</Mask></MainTitle>
            <SocialIcons />
            <Button bgcolor={theme.colors.accent}>HIRE ME</Button>
          </div>
          <PhotoWrapper>
            <Photo src={photoMain} alt="lyudmila" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  background: no-repeat url(${Graphic}) bottom left 30%;
  background-size: 661px ;
`;

const MainTitle = styled.h1`
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: 90px;
  padding-top: 15px;
`;

const PhotoWrapper = styled.div`
  max-width: 483px;
`

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SmallText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
`;

const Name = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 600;
  color: ${theme.colors.accent};
  padding-top: 20px;
`;

const Mask = styled.span`
  display: block;
  padding-left: 69px;
  position: relative;
  padding-bottom: 72px;

  &::after {
    content: "";
    background-color: ${theme.colors.accent};
    width: 17px;
    height: 17px;
    position: absolute;
    z-index: 1;
    right: -30px;
    bottom: 80px;
    border-radius: 50%;
  }
`;
