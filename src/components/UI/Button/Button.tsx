import { Text } from "../../Text/Text";
import { Wrapper } from "./styles"


type ButtonProps = {
    buttoncolor: "primary" | "secondary" | "backgroundWhite"| "..."
    text?: string;
    textColor?: 'white'| 'black' | 'primary'| "...";
    onPress:  any;
    children?: any;
}

export default function Button({text, buttoncolor, textColor, children, onPress}: ButtonProps){
    return(
        <Wrapper color={buttoncolor}  onPress={onPress}>
            <Text color={textColor} weight="medium">{text}{children}</Text>
        </Wrapper>
    )
}