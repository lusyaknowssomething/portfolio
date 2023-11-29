import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type ProjectPropsType = {
  title: string;
  text: string;
  src: string;
  gridArea: string;
  link: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject gridArea={props.gridArea}>
      <ImageWrapper>
        <Image src={props.src} alt={props.title} />
        <Description>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Button bgcolor={theme.colors.accent}>View</Button>
        </Description>
      </ImageWrapper>
    </StyledProject>
  );
};

type StyledProjectPropsType = {
  gridArea?: string;
};

const StyledProject = styled.div<StyledProjectPropsType>`
  width: 100%;
  position: relative;
  grid-area: ${(props) => props.gridArea};
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: ${theme.colors.fontButton};
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  width: 70%;
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
    }

    ${Description} {
      opacity: 1;
    }
  }

  ${Description} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
