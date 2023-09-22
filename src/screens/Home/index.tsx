import { Text } from "../../components/Text/Text";
import { Octicons } from "@expo/vector-icons";
import { StackPramsList } from "../../routes/AppRoutes";
import { RouteProp } from "@react-navigation/native";
import {
  ButtonBox,
  ButtonContainer,
  ButtonSearch,
  Container,
  FreeStorageBox,
  FreeStorageContainer,
  InputContainer,
  SearchItem,
  TextContainer,
  TextWelcome,
} from "./styles";
import ButtonSelect from "../../components/UI/ButtonSelect/ButtonSelect";
import InputItem from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

type HomeRouteProp = RouteProp<StackPramsList, "Home">;
interface Props {
  route: HomeRouteProp;
}

export default function Home({ route }: Props) {
  const userEmail = route.params?.userEmail;
  return (
    <Container>
      <TextContainer>
        <TextWelcome>
          <Text color="white" size={32} weight="maximum">
            Welcome
          </Text>
        </TextWelcome>
        <TextWelcome>
          <Text color="white" size={24} weight="maximum">
            {userEmail}
          </Text>
        </TextWelcome>
      </TextContainer>
      <ButtonContainer>
        <ButtonBox>
          <ButtonSelect buttoncolor="primary" onPress={console.log("teste")}>
            <Octicons name="upload" size={72} color="white" />
          </ButtonSelect>
        </ButtonBox>
        <FreeStorageContainer>
          <FreeStorageBox>
            <Text>Free Storage</Text>
          </FreeStorageBox>
          <FreeStorageBox>
            <Text>{"size"}</Text>
          </FreeStorageBox>
          <FreeStorageBox>
            <Text>From total 1Gb</Text>
          </FreeStorageBox>
        </FreeStorageContainer>
        <InputContainer>
          <SearchItem>
            <InputItem name="Search" type="text" />
          </SearchItem>
          <ButtonSearch>
            <Button
              buttoncolor="primary"
              text="Search"
              onPress={console.log("pesquisando")}
            />
          </ButtonSearch>
        </InputContainer>
      </ButtonContainer>
    </Container>
  );
}
