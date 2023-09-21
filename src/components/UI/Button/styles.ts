import styled from "styled-components/native";
import { theme } from "../../../styles/theme";
import { TouchableOpacity } from "react-native";


export const Wrapper = styled(TouchableOpacity)<{color: string}>`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 0 16px;
    background-color: ${(props) => theme.colors[props.color]}
;
`