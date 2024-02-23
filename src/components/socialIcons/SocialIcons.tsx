import React from "react";
import { Icon } from "../icon/Icon";
import { S } from "./SociallIcons_Styles"

const SocialIconsData = [
  {
    id: 0,
    href: "https://github.com/lusyaknowssomething",
    iconId: "gitHub",
    width: "30px",
    height: "30px",
    viewBox: "0 0 30 30",
  },
  {
    id: 1,
    href: "https://www.linkedin.com/in/lyudmila-khatanzeyskaya",
    iconId: "linkedin",
    width: "32px",
    height: "28px",
    viewBox: "0 0 32 28",
  },
  {
    id: 2,
    href: "https://t.me/dhdvbdd",
    iconId: "telegram",
    width: "30px",
    height: "30px",
    viewBox: "0 0 30 30",
  },
  {
    id: 3,
    href: "https://www.instagram.com/lusyaknowsnothing",
    iconId: "instagram",
    width: "31px",
    height: "27px",
    viewBox: "0 0 31 27",
  },
];

export const SocialIcons: React.FC = () => {
  return (
    <S.SocialList>
      {SocialIconsData.map((i) => {
        return (
          <S.SocialItem>
            <S.StyledLink href={i.href} target="_blank">
              <Icon
                key={i.id}
                iconId={i.iconId}
                width={i.width}
                height={i.height}
                viewBox={i.viewBox}
              />
            </S.StyledLink>
          </S.SocialItem>
        );
      })}
    </S.SocialList>
  );
};

