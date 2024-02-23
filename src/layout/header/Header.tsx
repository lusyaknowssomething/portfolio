import React from "react";
import { DesktopMenu } from "./HeaderMenu/desktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./HeaderMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";


export const Header: React.FC = () => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    
    return () => window.removeEventListener("resize", handleWindowResize);
  
  }, []);



  return (
    <S.StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} gap="20px">
          <Button as="a" href="https://github.com/lusyaknowssomething" target="_blank">Projects Here</Button>
          
          {width <breakpoint ? <MobileMenu /> : <DesktopMenu  />}
          
        </FlexWrapper>
      </Container>
    </S.StyledHeader>
  );
};
