import React from "react";
import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: green;
`;
