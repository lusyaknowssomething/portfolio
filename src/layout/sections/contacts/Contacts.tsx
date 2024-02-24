import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imageForContact from "../../../assets/images/photos/For-footer.png";
import { Dot } from "../../../components/Dot";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Contacts_Styles";
import { Fade } from "react-awesome-reveal";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id={"contacts"}>
      <Container>
        <S.ContactsWrapper>
          <S.Image src={imageForContact} />
          <FlexWrapper direction="column">
            <SectionTitle>
              Contacts<Dot>.</Dot>
            </SectionTitle>
            <Fade direction="up" triggerOnce={true}>
              <S.Text>
                Please fill out the form on this section to contact with me or
                send me an email. I will answer you as soon as I receive your
                message.
              </S.Text>
              <S.Form>
                <S.Field placeholder={"Name"} />
                <S.Field placeholder={"Email"} />
                <S.Field placeholder={"Message"} as={"textarea"} />
                <Button type={"submit"} bgcolor={theme.colors.accent}>
                  Send message
                </Button>
              </S.Form>
            </Fade>
          </FlexWrapper>
        </S.ContactsWrapper>
      </Container>
    </S.Contacts>
  );
};
