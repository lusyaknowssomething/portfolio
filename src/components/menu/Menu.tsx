import React from "react";
import styled from "styled-components";

interface menuItemPropsType {
  name: string;
  link: string;
  id: any;
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
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
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
  }
`;
