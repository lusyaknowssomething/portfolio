import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

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
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
        <ul>
          {props.items.map((item) => {
            return (
              <ListItem key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${theme.colors.accent};
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  display: none;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 52px;
    justify-content: center;
    flex-direction: column;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999;

  span {
    display: block;
    width: 36px;
    height: 3px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(0, 0, 0, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 3px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 3px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

const ListItem = styled.li``;

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
