import React from "react";
import { S } from "../HeaderMenu_Styles";

const menuItems = [
  { name: "Home", link: "home", id: 1 },
  { name: "About me", link: "aboutMe", id: 2 },
  { name: "My skills", link: "skills", id: 3 },
  { name: "Projects", link: "projects", id: 4 },
  { name: "Contacts", link: "contacts", id: 5 },
];

export const Menu: React.FC = () => {
  return (
    <div>
      <ul>
        {menuItems.map((item) => {
          return (
            <S.MenuItem key={item.id}>
              <S.MenuLink
                activeClass="active"
                to={item.link}
                spy={true}
              >
                {item.name}
              </S.MenuLink>
            </S.MenuItem>
          );
        })}
      </ul>
    </div>
  );
};
