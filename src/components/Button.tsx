import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  bgcolor?: string;
  width?: string;
  height?: string;
};

export const Button = styled.button<ButtonPropsType>`
  color: #fffefd;
  font-size: 18px;
  font-weight: 600;
  width: ${props => props.width || "182px"};
  height: ${props => props.height || "52px"};
  cursor: pointer;
  background-color: ${props => props.bgcolor || theme.colors.font};


  /* position: relative;
  z-index: 0;

  &hover {
    &::before {
      height: 100%;
      width: 100%;
    }
  }

  &::before {
    content: "";
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};
    z-index: -1;
  } */
  `;
