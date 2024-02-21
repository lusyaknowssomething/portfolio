import React from 'react';
import { S } from '../HeaderMenu_Styles'

interface menuItemPropsType {
  name: string;
  link: string;
  id: number;
}

interface menuItemsPropsType {
  items: menuItemPropsType[];
}

export const Menu: React.FC <menuItemsPropsType> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => {
          return (
            <S.MenuItem key={item.id}>
              <S.Link href={item.link}>{item.name}</S.Link>
            </S.MenuItem>
          );
        })}
      </ul>
    </div>
  );
};

