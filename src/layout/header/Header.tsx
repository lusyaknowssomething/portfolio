import React from "react";
import styled from "styled-components";
import { Menu } from "./menu/Menu";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const menuItems = [
  {name: 'Home', link: '', id: 1}, 
  {name: 'About me', link: '', id: 2}, 
  {name: 'My skills', link: '', id: 3}, 
  {name: 'Projects', link: '', id: 4}, 
  {name: 'Contacts', link: '', id: 5},
]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} gap="20px">
          <Button>Projects Here</Button>
          <Menu items={menuItems} />
          <MobileMenu items={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #ffffffcd;
`;
