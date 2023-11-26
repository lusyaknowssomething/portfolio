import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Dot } from "../../../components/Dot";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>
          My Skills<Dot>.</Dot>
        </SectionTitle>
        <FlexWrapper gap={"80px 10px"} wrap={"wrap"} justify="space-between">
          <Skill iconId={"html"} title={"HTML5"} />
          <Skill iconId={"css"} title={"CSS3"} />
          <Skill iconId={"js"} title={"JavaScript"} />
          <Skill iconId={"react"} title={"React"} />
          <Skill iconId={"ts"} title={"TypeScript"} />
          <Skill iconId={"redux"} title={"Redux"} />
          <Skill iconId={"git"} title={"Git"} />
          <Skill iconId={"styledComponents"} title={"Styled Components"} />
          <Skill iconId={"figma"} title={"Figma"} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100px;
`;
