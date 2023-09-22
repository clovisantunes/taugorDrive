import { Text } from "../../Text/Text";
import { WrapperSelect } from "./styles"


type ButtonProps = {
    buttoncolor: "primary" | "secondary" | "backgroundWhite"| "..."
    onPress:  any;
    children?: any;
}

export default function ButtonSelect({buttoncolor, children, onPress}: ButtonProps){
    return(
        <WrapperSelect color={buttoncolor}  onPress={onPress}>
            {children}
        </WrapperSelect>
    )
}