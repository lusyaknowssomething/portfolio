import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imageForContact from "../../../assets/images/photos/For-footer.png";
import { Dot } from "../../../components/Dot";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <FlexWrapper align="center" justify="space-between" wrap="wrap">
          <Image src={imageForContact} />
          <FlexWrapper direction="column">
            <SectionTitle>
              Contacts<Dot>.</Dot>
            </SectionTitle>
            <Text>
              Please fill out the form on this section to contact with me or
              send me an email. I will answer you as soon as I receive your
              message.
            </Text>
            <StyledForm>
              <Field placeholder={"Name"} />
              <Field placeholder={"Email"} />
              <Field placeholder={"Message"} as={"textarea"} />
              <Button type={"submit"} bgcolor={theme.colors.accent}>
                Send message
              </Button>
            </StyledForm>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  textarea {
    resize: none;
    height: 220px;
    width: 100%;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.formBorder};
  font-family: Poppins;
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;

  &::placeholder {
  color: ${theme.colors.formFont};
  }

  &:focus-visible {
    border: 1px solid ${theme.colors.accent};
    outline: none;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 557px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 103px;
  margin-top: -60px;
`;
