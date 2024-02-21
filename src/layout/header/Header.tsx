import React from "react";
import { DesktopMenu } from "./HeaderMenu/desktopMenu/DesktopMenu";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./HeaderMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

const menuItems = [
  {name: 'Home', link: '', id: 1}, 
  {name: 'About me', link: '', id: 2}, 
  {name: 'My skills', link: '', id: 3}, 
  {name: 'Projects', link: '', id: 4}, 
  {name: 'Contacts', link: '', id: 5},
]

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
          <Button>Projects Here</Button>
          
          {width <breakpoint ? <MobileMenu items={menuItems} /> : <DesktopMenu items={menuItems} />}
          
        </FlexWrapper>
      </Container>
    </S.StyledHeader>
  );
};
