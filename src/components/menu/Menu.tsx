import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

interface menuItemPropsType {
  name: string;
  link: string;
  id: number;
}

interface menuItemsPropsType {
  items: menuItemPropsType[];
}

export const Menu: React.FC<menuItemsPropsType> = (props) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item) => {
          return (
            <ListItem key={item.id}>
              <Link href={item.link}>{item.name}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 52px;
    justify-content: center;
  }
`;

const ListItem = styled.li`
`;

const Link = styled.a`
  color: ${theme.colors.font};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  position: relative;
  cursor: pointer;
  

  &::after {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.accent};
    width: 28px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;
