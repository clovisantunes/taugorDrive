import { useNavigation } from '@react-navigation/native';
import Button from '../../components/UI/Button/Button';
import {
    Container,
    HomeContainer,
    ImageHome,
    ButtonContainer,
    TextContainer,
    TextDescription,
    TextTitle,
    ButtonBox
} from './styles';

export default function Welcome() {
    const navigation = useNavigation<any>();
    return (
        <Container>
            <HomeContainer>
                <ImageHome source={require("../../../assets/images/going_up.jpg")} />
                <TextContainer>
                    <TextTitle>Taugor Drive</TextTitle>
                    <TextDescription>Simple and easy.</TextDescription>
                </TextContainer>
                <ButtonContainer>
                    <ButtonBox>
                        <Button
                            buttoncolor='primary'
                            text="Sign in"
                            onPress={() => navigation.navigate('SignIn')}
                            textColor='white'
                        />
                    </ButtonBox>
                    <ButtonBox>
                        <Button
                            buttoncolor='secondary'
                            text="Register"
                            onPress={() => navigation.navigate('SignUp')}
                            textColor='white'
                        />
                    </ButtonBox>
                </ButtonContainer>
            </HomeContainer>
        </Container>
    )
}