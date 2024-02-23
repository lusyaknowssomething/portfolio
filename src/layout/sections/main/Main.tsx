import React from "react";
import photoMain from "../../../assets/images/photos/For-main.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SocialIcons } from "../../../components/socialIcons/SocialIcons";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.StyledMain id={"home"}>
      <Container>
        <FlexWrapper align="center" justify="center" wrap="wrap" gap="100px">
          <div>
            <S.SmallText>Hello! I’m</S.SmallText>
            <S.Name>Khatanzeyskaya Lyudmila</S.Name>
            {/* <S.MainTitle>Frontend <br/><S.Mask>Developer</S.Mask></S.MainTitle> */}
            <S.MainTitle>
              <p>Frontend Developer</p>
              <Typewriter
                options={{
                  strings: ["Web", "Frontend", "React"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <S.Mask>Developer</S.Mask>
            </S.MainTitle>
            <SocialIcons />
            <Button as="a" href={'#contacts'} bgcolor={theme.colors.accent}>HIRE ME</Button>
          </div>
          <Tilt>
            <S.PhotoWrapper>
              <S.Photo src={photoMain} alt="lyudmila" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.StyledMain>
  );
};
