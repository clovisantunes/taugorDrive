import Button from "../../components/UI/Button/Button";
import InputItem from "../../components/UI/Input/Input";
import { Text } from "../../components/Text/Text";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react'
import { handleRegister } from "./services/SignUpService";
import {
    BoxErrorText,
    BoxText,
    ButtonItem,
    Container,
    ContainerItems, 
    ContainerText, 
    InputBox, 
    TextItem, 
    TextTitle
} from "./styles";


export default function SignUp() {
    const navigation = useNavigation<any>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError ] = useState('');

   const handleRegisterClick = () => {
        handleRegister({  email, password, setError, passwordConfirm, navigation});
    }

    return (
        <Container>
            <ContainerText>
                <TextTitle>
                    <Text color="dark" size={32} weight="maximum">Let's Register your account</Text>
                </TextTitle>
            </ContainerText>
            <ContainerItems>
                <InputBox>
                    <InputItem name="name" type="text" placeholder="Name" onChangeText={setName} value={name} />
                    <InputItem name="email" type="text" placeholder="Email" onChangeText={setEmail} value={email}/>
                    <InputItem name="password" type="text" placeholder="Password" onChangeText={setPassword} value={password}  />
                    <InputItem name="passwordConfirm" type="text" placeholder="Confirm your Password" onChangeText={setPasswordConfirm} value={passwordConfirm}  />
                    <Button
                        buttoncolor="primary"
                        textColor="white"
                        text="Sign Up"
                        onPress={handleRegisterClick}
                    />
                </InputBox>
                <BoxText>
                    <TextItem>
                        <Text size={16} color="dark" weight="minimum">Have an accout?</Text>
                    </TextItem>
                    <ButtonItem>
                        <Button buttoncolor="backgroundWhite" onPress={() => navigation.navigate('SignIn')}>
                            <Text size={16} color="primary" weight="medium">
                                Sign Up
                            </Text>
                        </Button>
                    </ButtonItem>
                </BoxText>
                <BoxErrorText>
                            {error && <Text size={18} color="dark" weight="maximum">{error}</Text>}
                </BoxErrorText>
            </ContainerItems>
        </Container>
    )
}