import { useState } from "react";
import { Text } from "../../../../components/Text/Text";
import Button from "../../../../components/UI/Button/Button";
import InputItem from "../../../../components/UI/Input/Input";
import { useNavigation } from "@react-navigation/native";
import {
  ButtonBox,
  LoginForm,
  ForgoutPass,
  FourgoutPassBox,
  Inputbox,
} from "./styles";
import AuthenticationMethods from "../../../../components/AuthenticationMethods/AuthenticationMethods";
import AuthError from "../../../../components/AuthenticationError/AuthError";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<any>();
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    /*handleLogin({ email, password, setError, navigation });*/
    navigation.navigate("Home", { userEmail: email });
  };

  return (
    <LoginForm>
      <Inputbox>
        <InputItem
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </Inputbox>
      <Inputbox>
        <InputItem
          secureTextEntry
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </Inputbox>
      <FourgoutPassBox>
        <ForgoutPass>
          <Text size={12} color="dark" weight="minimum">
            Forgout your password?
          </Text>
        </ForgoutPass>
      </FourgoutPassBox>
      <ButtonBox>
        <Button
          buttoncolor="primary"
          text="Sign in"
          textColor="white"
          onPress={handleLoginClick}
        />
      </ButtonBox>
      <AuthenticationMethods />
     <AuthError error={error} />
    </LoginForm>
  );
}
