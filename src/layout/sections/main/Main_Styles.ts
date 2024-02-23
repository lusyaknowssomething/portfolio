import { theme } from './../../../styles/Theme';
import styled from "styled-components";
import Graphic from "../../../assets/images/graphics/Vector_dotted.svg";
import { font } from "../../../styles/Common";


const StyledMain = styled.section`
  display: flex;
  background: no-repeat url(${Graphic}) bottom left 30%;
  background-size: 661px;
`;

const MainTitle = styled.h1`
  ${font({weight: 600, Fmin: 50, Fmax: 100})}
  padding-top: 15px;  
  max-width: 614px;

  @media ${theme.media.mobile} {
    padding-top: 35px;
  }

  p {
    display: none;
  }
`;

const PhotoWrapper = styled.div`
  max-width: 483px;
  overflow: hidden;
`

const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SmallText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;

  @media ${theme.media.tablet} {
    padding-top: 100px;
  }
`;

const Name = styled.span`
  ${font({weight: 600, color: theme.colors.accent, Fmin: 22, Fmax: 28})}
  display: block;
  padding-top: 20px;

  @media ${theme.media.mobile} {
    padding-top: 15px;
  }
`;

const Mask = styled.span`
  display: inline-block;
  padding-left: 69px;
  position: relative;
  padding-bottom: 72px;

  @media ${theme.media.mobile} {
    padding-left: 20px;
    padding-bottom: 50px;
  }

  &::after {
    content: "";
    background-color: ${theme.colors.accent};
    width: 17px;
    height: 17px;
    position: absolute;
    z-index: 1;
    right: -30px;
    bottom: 80px;
    border-radius: 50%;

    @media ${theme.media.mobile} {
      width: 10px;
      height: 10px;
      right: -10px;
      bottom: 60px;
  }
  }
`;

export const S = {
  StyledMain,
  MainTitle,
  PhotoWrapper,
  Photo,
  SmallText,
  Name,
  Mask
}