import React from "react";
import photoMain from "../../../assets/images/photos/For-main.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SocialIcons } from "../../../components/socialIcons/SocialIcons";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between" wrap="wrap">
          <div>
            <S.SmallText>Hello! I’m</S.SmallText>
            <S.Name>Khatanzeyskaya Lyudmila</S.Name>
            <S.MainTitle>Frontend <br/><S.Mask>Developer</S.Mask></S.MainTitle>
            <SocialIcons />
            <Button bgcolor={theme.colors.accent}>HIRE ME</Button>
          </div>
          <S.PhotoWrapper>
            <S.Photo src={photoMain} alt="lyudmila" />
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};
