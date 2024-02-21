import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Dot } from "../../../components/Dot";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles"
const SkillData = [
  {
    id: 0,
    iconId: "html",
    title: "HTML5"
  },
  {
    id: 1,
    iconId: "css",
    title: "CSS3"
  },
  {
    id: 2,
    iconId: "js",
    title: "JavaScript"
  },
  {
    id: 3,
    iconId: "react",
    title: "React"
  },
  {
    id: 4,
    iconId: "ts",
    title: "TypeScript"
  },
  {
    id: 5,
    iconId: "redux",
    title: "Redux"
  },
  {
    id: 6,
    iconId: "git",
    title: "Git"
  },
  {
    id: 7,
    iconId: "styledComponents",
    title: "Styled Components"
  },
  {
    id: 8,
    iconId: "figma",
    title: "Figma"
  },
]

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>
          My Skills<Dot>.</Dot>
        </SectionTitle>
        <FlexWrapper gap={"80px 10px"} wrap={"wrap"} justify="space-between">
          {SkillData.map((s) => {
            return <Skill key= {s.id} iconId={s.iconId} title={s.title} />
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

