import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";

const menuItems = [
  {name: 'Home', link: '', id: '1'}, 
  {name: 'About me', link: '', id: '2'}, 
  {name: 'My skills', link: '', id: '3'}, 
  {name: 'Projects', link: '', id: '4'}, 
  {name: 'Contacts', link: '', id: '5'},
]

export const Header = () => {
  return (
    <StyledHeader>
      <Menu items={menuItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: green;
`;
