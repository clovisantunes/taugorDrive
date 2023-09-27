import { Text } from "../../components/Text/Text";
import { StackPramsList } from "../../routes/AppRoutes";
import { RouteProp } from "@react-navigation/native";
import UploadButton from "./components/UploadButton";
import FreeStorage from "./components/FreeStorage";
import SearchComponent from "./components/SearchComponents";
import {
  ContainerItems,
  Container,
  TextContainer,
  TextWelcome,
} from "./styles";

type HomeRouteProp = RouteProp<StackPramsList, "Home">;
interface Props {
  route: HomeRouteProp;
  id: number;
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
