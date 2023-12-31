import styled from "styled-components/native";
import { theme } from "../../../styles/theme";
import { TouchableOpacity } from "react-native";


export const Wrapper = styled(TouchableOpacity)<{color: string}>`
    width: 100%;
    height: 100%;
    align-items: center;
    border-radius: 6px;
    justify-content: center;
    background-color: ${(props) => theme.colors[props.color]};
`