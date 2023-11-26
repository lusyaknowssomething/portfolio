import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  bgcolor?: string;
};

export const Button = styled.button<ButtonPropsType>`
  color: #fffefd;
  font-size: 18px;
  font-weight: 600;
  width: 182px;
  height: 52px;
  cursor: pointer;
  background-color: ${props => props.bgcolor || theme.colors.font}
`;
