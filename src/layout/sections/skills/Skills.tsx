import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={'wrap'} justify='space-between'>
        <Skill iconId={'html'} title={'HTML5'} />
        <Skill iconId={'css'} title={'CSS3'} />
        <Skill iconId={'js'} title={'JavaScript'} />
        <Skill iconId={'react'} title={'React'} />
        <Skill iconId={'ts'} title={'TypeScript'} />
        <Skill iconId={'redux'} title={'Redux'} />
        <Skill iconId={'styledComponents'} title={'Styled Components'} />
        <Skill iconId={'git'} title={'Git'} />
        <Skill iconId={'figma'} title={'Figma'} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #fedada;
  min-height:  100px;
`