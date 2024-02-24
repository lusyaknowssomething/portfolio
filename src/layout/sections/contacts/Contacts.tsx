import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imageForContact from "../../../assets/images/photos/For-footer.png";
import { Dot } from "../../../components/Dot";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';
import React, { ElementRef, useRef } from "react";

export const Contacts: React.FC = () => {

  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    
    e.preventDefault();

    if(!form.current) return;

    emailjs
      .sendForm('service_vi38mp6', 'template_4qbyzjs', form.current, {
        publicKey: '98wTRB3aY9c3ux18x',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    e.target.reset();
  };

  return (
    <S.Contacts id={"contacts"}>
      <Container>
        <S.ContactsWrapper>
          <S.Image src={imageForContact} alt="lyudmila khatanzeyskaya"/>
          <FlexWrapper direction="column">
            <SectionTitle>
              Contacts<Dot>.</Dot>
            </SectionTitle>
            <S.Text>
                Please fill out the form on this section to contact with me or
                send me an email. I will answer you as soon as I receive your
                message.
              </S.Text>
              <S.Form ref={form} onSubmit={sendEmail}>
                <S.Field required placeholder={"Name"} name={'user_name'} />
                <S.Field required placeholder={"Email"} name={'email'} />
                <S.Field required placeholder={"Message"} as={"textarea"} name={'message'} />
                <Button type={"submit"} bgcolor={theme.colors.accent}>
                  Send message
                </Button>
              </S.Form>
          </FlexWrapper>
        </S.ContactsWrapper>
      </Container>
    </S.Contacts>
  );
};
