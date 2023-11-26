import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import aboutMeImage from '../../../assets/images/photos/Lyudmila_rectangle.webp'
import { Container } from '../../../components/Container';

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
      <SectionTitle>About me</SectionTitle>
      <FlexWrapper>
        <p>I’m front-end developer looking for the opportunities to grow professionally. Having 1-year background in the B2B field as a Internet marketing specialist and 5-months in the IT field as a junior frontend developer I have understanding of all the software development processes. </p>
        <p>Being a part of the international teams I developed good communication skills.  I have experience in creating SPA based on React/Redux/TypeScript.  Now I am improving my skills in this direction and expanding them with new technologies. </p>
      </FlexWrapper>
      <Image src={aboutMeImage} alt='Lyudmila about me'/>
      </Container>
      
    </StyledAboutMe>
  );
};

const Image = styled.img`
  width:100%;
  object-fit: cover;
  max-width:1920px;
  margin-top: -200px;
`

const StyledAboutMe = styled.section`
  
`