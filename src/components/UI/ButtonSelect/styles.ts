import styled from "styled-components/native";
import { theme } from "../../../styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export const WrapperSelect = styled(TouchableOpacity)<{color: string}>`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 160px;
    border:${theme.border.line}px ${theme.border.color} ;
    background-color: ${(props) => theme.colors[props.color]};
`