import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imageForContact from "../../../assets/images/photos/For-footer.png";
import { Dot } from "../../../components/Dot";

export const Contacts = () => {
  return (
    <StyledContacts>
      <FlexWrapper align="center" justify="space-between">
        <Image src={imageForContact} />
        <FlexWrapper direction="column">
        <SectionTitle>Contacts<Dot>.</Dot></SectionTitle>
        <Text>Please fill out the form on this section to contact with me or send me an email. I will answer you as soon as I receive your message.</Text>
        <StyledForm>
          <Field placeholder={"name"} />
          <Field placeholder={"email"} />
          <Field placeholder={"message"} as={"textarea"} />
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
        </FlexWrapper>
        
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: lightyellow;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Field = styled.input``;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 557px;
`;

const Text = styled.p``;
