import styled from "styled-components/native";
import { theme } from "../../../styles/theme";


export const InputWrapper = styled.TextInput`
    width: 100%;
    height: 45px;
    border: ${theme.border.line}px solid ${theme.border.color};
    border-radius: 6px;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 4%;
`