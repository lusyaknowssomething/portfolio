import styled from 'styled-components';
import { font } from './../../../styles/Common';
import { theme } from '../../../styles/Theme';
const ColumnWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 100px;

@media ${theme.media.tablet} {
    gap: 50px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 1700px;
  margin-top: -150px;
  max-height: 840px;
  overflow: hidden;
  @media ${theme.media.tablet} {
    margin-top: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  @media ${theme.media.mobile} {
    transform: scale(1.5);
  }
`;

const AboutMe = styled.section`
`;

const Column = styled.p`
   ${font({weight: 400, Fmin: 15, Fmax: 18})}
`;

export const S = {
  ColumnWrapper,
  ImageWrapper,
  Image,
  AboutMe,
  Column
}