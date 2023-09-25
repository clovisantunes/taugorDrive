import { useState } from 'react';
import { Text } from '../../../../components/Text/Text'
import Button from '../../../../components/UI/Button/Button'
import InputItem from '../../../../components/UI/Input/Input'
import { useNavigation } from '@react-navigation/native';
import  {   
    BoxText,
    ButtonItem,
    InputBox,
    FormSignUp,
    TextItem,
    ButtonSignIn
} from './styles'
import { handleRegister } from '../../services/SignUpService';
import AuthError from '../../../../components/AuthenticationError/AuthError';


export default function SignUpForm(){
    const [error, setError ] = useState('');
    const navigation = useNavigation<any>();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleRegisterClick = () => {
        handleRegister({ email, password, setError, passwordConfirm, navigation });
      };

    return(
        <FormSignUp>
        <InputBox>
            <InputItem name="name" type="text" placeholder="Name" onChangeText={setName} value={name} />
        </InputBox> 
        <InputBox>   
            <InputItem name="email" type="text" placeholder="Email" onChangeText={setEmail} value={email}/>
        </InputBox> 
        <InputBox>  
            <InputItem secureTextEntry name="password" type="text" placeholder="Password" onChangeText={setPassword} value={password}  />
        </InputBox>    
        <InputBox>    
            <InputItem secureTextEntry name="passwordConfirm" type="text" placeholder="Confirm your Password" onChangeText={setPasswordConfirm} value={passwordConfirm}  />
        </InputBox>   
            <ButtonItem>
                <Button
                    buttoncolor="primary"
                    textColor="white"
                    text="Sign Up"
                    onPress={handleRegisterClick}
                />
            </ButtonItem>
        <BoxText>
            <TextItem>
                <Text size={16} color="dark" weight="minimum">Have an accout? </Text>
            </TextItem>
            <ButtonSignIn>
                <Button buttoncolor="backgroundWhite" onPress={() => navigation.navigate('SignIn')}>
                    <Text size={16} color="primary" weight="medium">
                        Sign In
                    </Text>
                </Button>
            </ButtonSignIn>
        </BoxText>
        <AuthError error={error} />
    </FormSignUp>
    )
}