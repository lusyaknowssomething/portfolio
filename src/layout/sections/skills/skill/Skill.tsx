import { S } from "../Skills_Styles"
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <S.IconWrapper>
        <Icon iconId={props.iconId} />
      </S.IconWrapper>
      <S.SkillTitle>{props.title}</S.SkillTitle>
    </S.Skill>
  );
};
