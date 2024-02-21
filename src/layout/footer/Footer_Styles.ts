import { theme } from './../../styles/Theme';
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 40px 0;
`;

const Text = styled.span`
  font-weight: 700px;
  font-size: 18px;
  margin-bottom: 30px;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;

export const S = {
  StyledFooter,
  Text,
  Copyright,
}
