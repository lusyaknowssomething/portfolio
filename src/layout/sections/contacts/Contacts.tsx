import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imageForContact from "../../../assets/images/photos/For-footer.png";
import { Dot } from "../../../components/Dot";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { S } from "./Contacts_Styles"

export const Contacts = () => {
  return (
    <S.StyledContacts>
      <Container>
        <S.ContactsWrapper >
          <S.Image src={imageForContact} />
          <FlexWrapper direction="column">
            <SectionTitle>
              Contacts<Dot>.</Dot>
            </SectionTitle>
            <S.Text>
              Please fill out the form on this section to contact with me or
              send me an email. I will answer you as soon as I receive your
              message.
            </S.Text>
            <S.StyledForm>
              <S.Field placeholder={"Name"} />
              <S.Field placeholder={"Email"} />
              <S.Field placeholder={"Message"} as={"textarea"} />
              <Button type={"submit"} bgcolor={theme.colors.accent}>
                Send message
              </Button>
            </S.StyledForm>
          </FlexWrapper>
        </S.ContactsWrapper>
      </Container>
    </S.StyledContacts>
  );
};

