import { Text } from "../../components/Text/Text";
import { StackPramsList } from "../../routes/AppRoutes";
import { Container, TextTitle } from "./styles"; 
import { RouteProp } from "@react-navigation/native";

type HomeScreenRouteProp = RouteProp<StackPramsList, 'HomeScreen'>;
interface Props {
    route: HomeScreenRouteProp;
  }

export default function HomeScreen({ route }: Props){
    const email = route.params;

    return(
        <Container>
            <TextTitle>
                <Text color="dark" size={32} weight="maximum">Welcome {email}</Text>
            </TextTitle>

        </Container>

    )
}
