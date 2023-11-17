import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import photoMain from "../../../assets/images/photos/For-main.png";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align="center" justify="space-between">
        <div>
          <span>Hello! I’m</span>
          <span>Khatanzeyskaya Lyudmila</span>
          <MainTitle>Frontend Developer</MainTitle>
          <ul>
            <li>
              <a href="#">
                <Icon iconId="gitHub" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <Icon iconId="linkedin" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <Icon iconId="telegram" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <Icon iconId="instagram" />
              </a>
            </li>
          </ul>
        </div>
        <Photo src={photoMain} alt="lyudmila" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: #ffbcbc
`

const MainTitle = styled.h1`
  
`

const Photo = styled.img`
  width: 583px;
  height: 772px;
  object-fit: cover;
`;
