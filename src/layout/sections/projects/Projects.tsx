import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Project } from '../../../assets/images/projects/project/Project';
import mesto from '../../../assets/images/projects/mesto.jpg'
import movieExplorer from '../../../assets/images/projects/movie_explorer.jpg'
import socialNetwork from '../../../assets/images/projects/social-network.jpg'
import todo from '../../../assets/images/projects/todo.jpg'
import travel from '../../../assets/images/projects/travel.jpg'
import { Dot } from '../../../components/Dot';


export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>My Projects<Dot>.</Dot></SectionTitle>
      <Project 
        title='ToDo List' 
        text='Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.'
        src={todo}
      />
      <Project 
        title='Social Network' 
        text='ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
        src={socialNetwork}
      />
      <Project 
        title='Movie Explorer' 
        text='ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
        src={movieExplorer}
      />
      <Project 
        title='Mesto' 
        text='ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
        src={mesto}
      />
      <Project 
        title='Russian Travel' 
        text='ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.'
        src={travel}
      />
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: lightblue;
  
`