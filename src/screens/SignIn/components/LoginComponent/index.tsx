import { useState } from "react";
import { Text } from "../../../../components/Text/Text";
import Button from "../../../../components/UI/Button/Button";
import InputItem from "../../../../components/UI/Input/Input";
import {
  BoxErrorText,
  BoxGoogle,
  BoxLine,
  BoxText,
  ButtonBox,
  ButtonItem,
  ContainerGoogle,
  ContainerItems,
  ForgoutPass,
  FourgoutPassBox,
  Inputbox,
  Line,
  TextItem,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation<any>();

  const handleLoginClick = () => {
    /*handleLogin({ email, password, setError, navigation });*/
    navigation.navigate("Home", { userEmail: email });
  };

  return (
    <ContainerItems>
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
      <ContainerGoogle>
        <Line />
        <BoxLine>
          <Text size={16} color="primary" weight="maximum">
            Or
          </Text>
        </BoxLine>
        <BoxGoogle>
          <ButtonBox></ButtonBox>
          <BoxText>
            <TextItem>
              <Text size={16} color="dark" weight="medium">
                Don't have an accout?
              </Text>
            </TextItem>
            <ButtonItem>
              <Button
                buttoncolor="backgroundWhite"
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text size={16} color="primary" weight="medium">
                  Register Now
                </Text>
              </Button>
            </ButtonItem>
          </BoxText>
          <BoxErrorText>
            {error && (
              <Text size={18} color="dark" weight="maximum">
                {error}
              </Text>
            )}
          </BoxErrorText>
        </BoxGoogle>
      </ContainerGoogle>
    </ContainerItems>
  );
}
