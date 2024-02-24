import { Link } from 'react-scroll';
import { theme } from './../../../styles/Theme';
import styled, { css } from "styled-components";


// Menu

const MenuItem = styled.li`
`;

const MenuLink = styled(Link)`
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
    width: 0px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &:hover, &.active {
    &::after {
      width: 28px;
      transition: ${theme.animations.transition};
    }
  }
`;

// DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 42px;
    justify-content: center;
  }
`;


// MobileMenu

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: ${theme.colors.accent};
  opacity: .95;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: .8s ease-in-out;

  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    transition: .8s ease-in-out;

    a {&::after {
    background-color: black;  
  }}
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);
      
      ul {
        gap: 52px;
      }   
    `} 
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 9999;
  cursor: pointer;

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

export const S = {
  MenuItem,
  MenuLink,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
}