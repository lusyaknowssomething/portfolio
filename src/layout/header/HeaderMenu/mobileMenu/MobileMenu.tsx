import React from "react";
import { Menu } from "../menu/Menu";
import { S } from '../HeaderMenu_Styles'

interface menuItemPropsType {
  name: string;
  link: string;
  id: number;
}

interface menuItemsPropsType {
  items: menuItemPropsType[];
}

export const MobileMenu: React.FC<menuItemsPropsType> = (props) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu items={props.items} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};



