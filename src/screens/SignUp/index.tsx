import { Text } from "../../components/Text/Text";
import SignUpForm from "./components/SignUpForm";
import { Container, ContainerText, TextTitle } from "./styles";

export default function SignUp() {

  return (
    <Container>
      <ContainerText>
        <TextTitle>
          <Text color="dark" size={32} weight="maximum">
            Let's Register your account
          </Text>
        </TextTitle>
      </ContainerText>
      <SignUpForm />
    </Container>
  );
}
