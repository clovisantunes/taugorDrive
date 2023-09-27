import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

interface SignUpProps {
    email: string;
    password: string;
    passwordConfirm: string;
    setError: (error: string) => void;
    navigation: any;
}
export const handleRegister = async ({ email, password, setError, passwordConfirm, navigation}: SignUpProps) => {
    if (password == passwordConfirm) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth ,email, password)
            .then(() => {
                navigation.navigate('Home')
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setError('Esse endereço de e-mail já está em uso!')
                } else if (error.code === 'auth/invalid-email') {
                    setError('Esse endereço de e-mail é inválido!')
                } else {
                    setError(error)
                }
                console.error(error);
            });
    } else {
        setError('As senhas não coincidem. Por favor, verifique sua senha e confirmação de senha.');

    }
};