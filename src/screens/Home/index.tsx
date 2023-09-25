import { Text } from "../../components/Text/Text";
import { StackPramsList } from "../../routes/AppRoutes";
import { RouteProp } from "@react-navigation/native";
import {
  ContainerItems,
  ButtonSearch,
  Container,
  InputContainer,
  SearchItem,
  TextContainer,
  TextWelcome,
} from "./styles";
import InputItem from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import UploadButton from "./components/UploadButton";
import FreeStorage from "./components/FreeStorage";
import SearchComponent from "./components/SearchComponents";

type HomeRouteProp = RouteProp<StackPramsList, "Home">;
interface Props {
  route: HomeRouteProp;
  id: number
}

export default function Home({ route, id }: Props) {
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
      <ContainerItems>
        <UploadButton />
        <FreeStorage />
        <SearchComponent id={id} name="Items" />
      </ContainerItems>
    </Container>
  );
}
