import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import aboutMeImage from "../../../assets/images/photos/Lyudmila_rectangle.webp";
import { Container } from "../../../components/Container";
import { Dot } from "../../../components/Dot";
import { S } from "./AboutMe_Styles"

export const AboutMe: React.FC = () => {
  return (
    <S.AboutMe>
      <Container>
        <SectionTitle>About me<Dot>.</Dot></SectionTitle>
        <S.ColumnWrapper>
          <S.Column>
            I’m front-end developer looking for the opportunities to grow
            professionally. Having 1-year background in the B2B field as a
            Internet marketing specialist and 5-months in the IT field as a
            junior frontend developer I have understanding of all the software
            development processes.{" "}
          </S.Column>
          <S.Column>
            Being a part of the international teams I developed good
            communication skills. I have experience in creating SPA based on
            React/Redux/TypeScript. Now I am improving my skills in this
            direction and expanding them with new technologies.{" "}
          </S.Column>
        </S.ColumnWrapper>
        <S.ImageWrapper>
          <S.Image src={aboutMeImage} alt="Lyudmila about me" />
        </S.ImageWrapper> 
      </Container>
    </S.AboutMe>
  );
};


