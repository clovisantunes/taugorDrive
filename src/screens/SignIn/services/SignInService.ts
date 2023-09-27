import {
    signInWithEmailAndPassword,
    getAuth
} from "firebase/auth";

interface loginProps {
    email: string;
    password: string;
    setError?: (error: string) => void;
    navigation: any;
}

export const handleLogin = async ({email, password, setError, navigation}: loginProps) => {
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigation.navigate('Home', { userEmail: email })
        })
        .catch(error => {
            if (setError) {
                if (error.code === 'auth/invalid-email') {
                    setError('Erro Login/Senha inválido');
                } else {
                    setError('Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
                }
            }
            console.error(error);
        });
}
