import Button from "../../components/UI/Button/Button";
import InputItem from "../../components/UI/Input/Input";
import { Text } from "../../components/Text/Text";
import { useNavigation } from "@react-navigation/native";
import { handleLogin } from "./services/SignInService";
import { useState } from "react";
import {
    BoxErrorText,
    BoxGoogle,
    BoxLine,
    BoxText,
    ButtonBox,
    ButtonItem,
    Container,
    ContainerGoogle,
    ContainerItems,
    ContainerText,
    ForgoutPass,
    FourgoutPassBox,
    Inputbox,
    Line,
    TextBox,
    TextItem
} from "./styles";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation<any>();
    
   const handleLoginClick = () => {
        handleLogin({ email, password, setError, navigation });
    }

    return (
        <Container>
            <ContainerText>
                <TextBox>
                    <Text size={28} color="dark" weight="maximum">Lets Sign you in</Text>
                </TextBox>
                <TextBox>
                    <Text size={18} color="dark" weight="minimum">Welcome back,</Text>
                </TextBox>
                <TextBox>
                    <Text size={18} color="dark" weight="minimum">You have been missed</Text>
                </TextBox>
            </ContainerText>
            <ContainerItems>
                <Inputbox>
                    <InputItem
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
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
                        <Text size={12} color="dark" weight="minimum">Forgout your password?</Text>
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
                        <Text size={16} color="primary" weight="maximum">Or</Text>
                    </BoxLine>
                    <BoxGoogle>
                        <ButtonBox>
                           
                        </ButtonBox>
                        <BoxText>
                            <TextItem>
                                <Text size={16} color="dark" weight="medium">Don't have an accout?</Text>
                            </TextItem>
                            <ButtonItem>
                            <Button  buttoncolor="backgroundWhite" onPress={() => navigation.navigate('SignUp')}>
                                <Text size={16} color="primary" weight="medium">
                                    Register Now
                                </Text>
                            </Button>
                            </ButtonItem>
                        </BoxText>
                        <BoxErrorText>
                            {error && <Text size={18} color="dark" weight="maximum">{error}</Text>}
                        </BoxErrorText>
                    </BoxGoogle>
                </ContainerGoogle>
            </ContainerItems>

        </Container>
    )
}