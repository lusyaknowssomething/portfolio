import React from "react";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";
import { S } from "../Projects_Styles"

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  gridArea: string;
  link: string;
  style?: any;
};

export const Project: React.FC <ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project gridArea={props.gridArea} style={props.style}>
      <S.ImageWrapper>
        <S.Image src={props.src} alt={props.title} />
        <S.Description>
          <S.Title>{props.title}</S.Title>
          <S.Text>{props.text}</S.Text>
          <Button bgcolor={theme.colors.accent} width="140px" height="45px">View</Button>
        </S.Description>
      </S.ImageWrapper>
    </S.Project>
  );
};

