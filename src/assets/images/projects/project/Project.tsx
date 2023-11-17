import React from 'react';
import mesto from '../../../assets/images/projects/mesto.jpg'
import styled from 'styled-components';

type ProjectPropsType = {
  title: string
  text: string
  src: string
}


export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href={'#'}>Code</Link>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  background-color: lightgreen;
  max-width: 540px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

const Title = styled.h3`
  
`

const Text = styled.p`
  
`

const Link = styled.a`
  
`