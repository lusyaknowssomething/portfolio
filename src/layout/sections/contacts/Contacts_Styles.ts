import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contacts = styled.section``;

const ContactsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 1300px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
`;

const Form = styled.form`
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

  @media screen and (max-width: 1300px) {
    margin-right: -20%;
  }
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 103px;
  margin-top: -60px;
`;

export const S = {
  Contacts,
  ContactsWrapper,
  Form,
  Field,
  Image,
  Text,
}
