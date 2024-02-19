import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <IconWrapper>
        <Icon iconId={props.iconId} />
      </IconWrapper>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;

  @media ${theme.media.mobile} {
    width: 45%;
    :last-child {
      display: none;
    }
  }
`;

const SkillTitle = styled.h3`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const IconWrapper = styled.div`
  position: relative;

   &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    display: inline-block;
    width: 104px;
    height: 104px;
    transform: rotate(45deg) translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.05);
    transform-origin: top left;
    z-index: -1;
   }
`;