import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";

interface menuItemPropsType {
  name: string;
  link: string;
  id: number;
}

interface menuItemsPropsType {
  items: menuItemPropsType[];
}

export const MobileMenu: React.FC<menuItemsPropsType> = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
        <Menu items={props.items} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
