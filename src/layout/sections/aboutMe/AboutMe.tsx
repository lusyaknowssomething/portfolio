import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import aboutMeImage from "../../../assets/images/photos/Lyudmila_rectangle.webp";
import { Container } from "../../../components/Container";
import { Dot } from "../../../components/Dot";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle>About me<Dot>.</Dot></SectionTitle>
        <ColumnWrapper>
          <Column>
            I’m front-end developer looking for the opportunities to grow
            professionally. Having 1-year background in the B2B field as a
            Internet marketing specialist and 5-months in the IT field as a
            junior frontend developer I have understanding of all the software
            development processes.{" "}
          </Column>
          <Column>
            Being a part of the international teams I developed good
            communication skills. I have experience in creating SPA based on
            React/Redux/TypeScript. Now I am improving my skills in this
            direction and expanding them with new technologies.{" "}
          </Column>
        </ColumnWrapper>
        <ImageWrapper>
          <Image src={aboutMeImage} alt="Lyudmila about me" />
        </ImageWrapper> 
      </Container>
    </StyledAboutMe>
  );
};

const ColumnWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 100px;

@media ${theme.media.tablet} {
    gap: 50px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 1700px;
  margin-top: -150px;
  max-height: 840px;
  overflow: hidden;
  @media ${theme.media.tablet} {
    margin-top: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  @media ${theme.media.mobile} {
    transform: scale(1.5);
  }
`;

const StyledAboutMe = styled.section`
`;

const Column = styled.p`
   ${font({weight: 400, Fmin: 15, Fmax: 18})}
`;
