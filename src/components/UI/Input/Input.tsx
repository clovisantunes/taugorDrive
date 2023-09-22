import { InputWrapper } from "./styles";
import { TextInputProps } from 'react-native';

type InputProps = TextInputProps & {
    placeholder?: string;
    type:string;
    name: string;
};

export default function InputItem({ ...rest }: InputProps){
    return(
        <InputWrapper {...rest} />
    )
}