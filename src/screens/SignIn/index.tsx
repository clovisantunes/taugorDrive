import Button from "../../components/UI/Button/Button";
import InputItem from "../../components/UI/Input/Input";
import { Text } from "../../components/Text/Text";
import { useNavigation } from "@react-navigation/native";
import { handleLogin } from "./services/SignInService";
import { useState } from "react";
import { Container, ContainerText, TextBox } from "./styles";
import LoginComponent from "./components/SignInForm";

export default function SignIn() {
  return (
    <Container>
      <ContainerText>
        <TextBox>
          <Text size={28} color="dark" weight="maximum">
            Lets Sign you in
          </Text>
        </TextBox>
        <TextBox>
          <Text size={18} color="dark" weight="minimum">
            Welcome back,
          </Text>
        </TextBox>
        <TextBox>
          <Text size={18} color="dark" weight="minimum">
            You have been missed
          </Text>
        </TextBox>
      </ContainerText>
      <LoginComponent />
    </Container>
  );
}
