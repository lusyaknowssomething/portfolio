import { theme } from './../styles/Theme';
import styled from "styled-components";

type ButtonPropsType = {
  bgcolor?: string;
  width?: string;
  height?: string;
};

export const Button = styled.button<ButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffefd;
  font-size: 18px;
  font-weight: 600;
  width: ${props => props.width || "182px"};
  height: ${props => props.height || "52px"};
  cursor: pointer;
  background-color: ${props => props.bgcolor || theme.colors.font};
  transition: ${theme.animations.transition};

  :hover {
    transform: translateY(-5px);
  }
  `;
