import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const  ModalView = styled.View`
    width: 300px;
    height: 400px;
    border-radius: 15px;
    background-color: ${theme.colors.dark};
`
export const CloseModalBox = styled.View`
    width: 100%;
    align-items: flex-end;
    padding: 8%;
`
export const CloseButton = styled.View`
    width: 32px;
    height: 32px;
`
export const TextDescription = styled.View`
    width: 100%;
    flex-direction: column;
    border-radius: 4px;
    margin-bottom: 8%;
    padding: 0  8%;
`
export const TypeItem = styled.View`
    width: 100%;
    height: 30%;
    
    align-items: center;
    justify-content: center;
`