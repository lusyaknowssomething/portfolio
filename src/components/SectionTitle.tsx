import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({weight: 600, lineHeight: 1.52, Fmax: 50, Fmin: 30})}
  
  text-align: center;
  margin-bottom: 80px;
`;
