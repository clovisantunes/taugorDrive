import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background: ${theme.colors.backgroundWhite};
`
export const ContainerText = styled.View`
    align-items: flex-start;
    justify-content: flex-start;
    margin: 16% 0 16% 6%;

`
export const TextBox = styled.View`
    width: 100%;
    margin:0 0 3% 0;
` 

export const ContainerItems = styled.View`
   align-items: center;
   width: 100%;
    
   `
export const Inputbox = styled.View`
    width: 90%;
    align-items: center;
    justify-content: center;
`
export const FourgoutPassBox = styled.View`
    align-items: flex-end;
    justify-items: right;
    width: 90%;
    margin-bottom: 3%;
`
export const ForgoutPass= styled.TouchableOpacity`
       background-color: none;
   `
export const ButtonBox = styled.View`
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;
`
export const ContainerGoogle = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const Line = styled.View`
    position: absolute;
    top: 10%;
    width: 100%;
    border: solid ${theme.border.line}px ${theme.border.color};
    z-index: 1;
`
export const BoxLine = styled.View`
    width: 16%;
    z-index: 2;
    background-color: ${theme.colors.backgroundWhite};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 8%;
`

export const BoxGoogle = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: column;
`
export const BoxText = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
`
export const TextItem = styled.View`
    width: 50%;
    margin-top: 3%;
    align-items: flex-end;
`
export const ButtonItem = styled.View`
    width: 50%;
    align-items: flex-start;
`
export const BoxErrorText = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 8%;
`