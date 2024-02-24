import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import mesto from "../../../assets/images/projects/mesto.jpg";
import movieExplorer from "../../../assets/images/projects/movie_explorer.jpg";
import socialNetwork from "../../../assets/images/projects/social-network.jpg";
import todo from "../../../assets/images/projects/todo.jpg";
import todoForMobile from "../../../assets/images/projects/todofromobile.jpg";
import travel from "../../../assets/images/projects/travel.jpg";
import { Dot } from "../../../components/Dot";
import { S } from "./Projects_Styles";
import "../../../styles/Slider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
    src: socialNetwork,
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

export const Projects: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 577;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //изменение размера первой картинки для карусели 

  const items = [
    ...projectItems.map((item) => {
      let style
      if(item.title === "ToDo List" && width < breakpoint) {
        item.src = todoForMobile
      } if(item.title === "ToDo List" && width >= breakpoint) {
        item.src = todo
      }

      return (
        <Project
          key={item.id}
          title={item.title}
          text={item.text}
          src={item.src}
          link={item.link}
          gridArea={item.gridArea}
          style={style}
        />
      );
    }),
  ];
  

  const Carousel = () => <AliceCarousel mouseTracking items={items} />;


  return (
    <S.Projects id={"projects"}>
      <SectionTitle>
        My Projects<Dot>.</Dot>
      </SectionTitle>
      {width < breakpoint ? <Carousel /> : <S.ProjectsWrapper>{items}</S.ProjectsWrapper>}
    </S.Projects>
  );
};
