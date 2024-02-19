import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import mesto from "../../../assets/images/projects/mesto.jpg";
import movieExplorer from "../../../assets/images/projects/movie_explorer.jpg";
import socialNetwork from "../../../assets/images/projects/social-network.jpg";
import todo from "../../../assets/images/projects/todo.jpg";
import travel from "../../../assets/images/projects/travel.jpg";
import { Dot } from "../../../components/Dot";

import ReactDOM from 'react-dom/client';

const projectItems = [
  {
    title: "ToDo List",
    text: "ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.",
    src: todo,
    link: "",
    gridArea: "todo",
    id: 1,
  },
  {
    title: "Social Network",
    text: "Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.",
    src: socialNetwork ,
    link: "",
    gridArea: "SN",
    id: 2,
  },
  {
    title: "Movie Explorer",
    text: "An interactive service where you can find films on demand and save them in your personal account. Movies Explorer is a portfolio thesis project written in React.js using Single Page Application principles.",
    src: movieExplorer,
    link: "https://github.com/lusyaknowssomething/movies-explorer-frontend",
    gridArea: "ME",
    id: 3,
  },
  {
    title: "Mesto",
    text: "Mesto is a one-page site with the ability to register and log in, add and delete cards with a photo and name, like and unlike, and edit your profile. Analogous to a simple social network.",
    src: mesto,
    link: "https://github.com/lusyaknowssomething/react-mesto-api-full",
    gridArea: "mesto",
    id: 4,
  },
  {
    title: "Russian Travel",
    text: "Traveling around Russia is the educational project in the web development course from Yandex.Practicum. The project contains interesting places to travel around Russia.",
    src: travel,
    link: "https://github.com/lusyaknowssomething/russian-travel",
    gridArea: "travel",
    id: 5,
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>
        My Projects<Dot>.</Dot>
      </SectionTitle>
      <ProjectsWrapper>
      {projectItems.map((item) => {
          return (
            <Project key={item.id}
          title={item.title}
          text={item.text}
          src={item.src}
          link={item.link}
          gridArea={item.gridArea}
        />
          );
        })}
      </ProjectsWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-areas:
    "todo SN ME"
    "todo mesto travel";
  gap: 25px;
  grid-template-columns: 45.15% 1fr 1fr;
`;


type BuildingPropsType = {
  children: string
  href?: string
};

const StyledBuilding = styled.button<BuildingPropsType>`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
  white-space: nowrap;
  color: #11be5f;
`


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div className="App">
      <StyledBuilding>ChoiceButton</StyledBuilding>

      <StyledBuilding href="#">ChoiceLink</StyledBuilding>
  </div>
);

// import ReactDOM from 'react-dom/client';
// import styled, { css } from "styled-components";


// const StyledCabinet = styled.a`
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 25px;
//   white-space: nowrap;
//   color: #2182d9;
// `

// type CabinetPropsType = {
//     path: string
//     text: string
// }

// function Cabinet(props:XXX) {
//     return (
//         <StyledCabinet href={props.YYY}>
//             {props.ZZZ}
//         </StyledCabinet>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <div className="App">
//         <Cabinet path="https://hotmart.s3.amazonaws.com/product_pictures/ccdb08be-d4d5-467b-8491-a88bf61024bc/guiahtml38051.png" text="See Cabinet" />
//     </div>
// );
