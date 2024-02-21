import styled from 'styled-components';
import { theme } from './../../../styles/Theme';
import { font } from '../../../styles/Common';


// Project

const StyledProjects = styled.section``;

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-areas:
    "todo SN ME"
    "todo mesto travel";
  gap: 25px;
  grid-template-columns: 45.15% 1fr 1fr;

  @media ${theme.media.tablet} {
    grid-template-areas:
    "todo todo"
    "SN ME"
    "mesto travel";
    grid-template-columns: 1fr 1fr;
  }
  @media ${theme.media.mobile} {
    display: flex;
    flex-wrap: wrap;
  }
`;

// Project 

type StyledProjectPropsType = {
  gridArea?: string;
};

const StyledProject = styled.div<StyledProjectPropsType>`
  width: 100%;
  position: relative;
  grid-area: ${(props) => props.gridArea};
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: ${theme.colors.fontButton};
`;

const Title = styled.h3`
  ${font({color: theme.colors.fontButton ,weight: 700, Fmin: 12, Fmax: 18})}
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  width: 70%;
  margin-bottom: 20px;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
    }

    ${Description} {
      opacity: 1;
    }
  }

  ${Description} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const S = {
  StyledProjects,
  ProjectsWrapper,
  StyledProject,
  Image,
  Description,
  Title,
  Text,
  ImageWrapper,
}