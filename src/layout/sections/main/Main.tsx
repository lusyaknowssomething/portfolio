import React from "react";
import styled from "styled-components";
import photoMain from "../../../assets/images/photos/For-main.png";
import Graphic from "../../../assets/images/graphics/Vector_dotted.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SocialIcons } from "../../../components/socialIcons/SocialIcons";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between" wrap="wrap">
          <div>
            <SmallText>Hello! I’m</SmallText>
            <Name>Khatanzeyskaya Lyudmila</Name>
            <MainTitle>Frontend <br/><Mask>Developer</Mask></MainTitle>
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
  background: no-repeat url(${Graphic}) bottom left 30%;
  background-size: 661px;

  
`;

const MainTitle = styled.h1`
  ${font({weight: 600, Fmin: 50, Fmax: 100})}
  padding-top: 15px;  

  @media ${theme.media.mobile} {
    padding-top: 35px;
  }
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

  @media ${theme.media.tablet} {
    padding-top: 100px;
  }
`;

const Name = styled.span`
  ${font({weight: 600, color: theme.colors.accent, Fmin: 22, Fmax: 28})}
  display: block;
  padding-top: 20px;

  @media ${theme.media.mobile} {
    padding-top: 15px;
  }
`;

const Mask = styled.span`
  display: inline-block;
  padding-left: 69px;
  position: relative;
  padding-bottom: 72px;

  @media ${theme.media.mobile} {
    padding-left: 20px;
    padding-bottom: 50px;
  }

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

    @media ${theme.media.mobile} {
      width: 10px;
      height: 10px;
      right: -10px;
      bottom: 60px;
  }
  }
`;
