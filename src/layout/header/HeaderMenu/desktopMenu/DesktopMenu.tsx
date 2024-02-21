import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles"

interface menuItemPropsType {
  name: string;
  link: string;
  id: number;
}

interface menuItemsPropsType {
  items: menuItemPropsType[];
}

export const DesktopMenu: React.FC<menuItemsPropsType> = (props) => {
  return (
    <S.DesktopMenu>
      <Menu items={props.items} />
    </S.DesktopMenu>
  );
};


