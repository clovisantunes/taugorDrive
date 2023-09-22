import styled from "styled-components/native"
import { theme } from "../../../../styles/theme"

export const ContainerItems = styled.View`
   align-items: center;
   width: 100%;
    
   `
export const Inputbox = styled.View`
    width: 90%;
    align-items: center;
    justify-content: center;
    margin-bottom: 4%;
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
    height: 45px;
    justify-content: center;
    align-items: center;
   margin-bottom: 4%;
   border-radius: 6px;
`
export const ContainerGoogle = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const Line = styled.View`
    position: absolute;
    top: 8%;
    width: 100%;
    border: solid 1px ${theme.border.color};
    z-index: 1;
`
export const BoxLine = styled.View`
    width: 16%;
    z-index: 2;
    background-color: ${theme.colors.backgroundWhite};
    justify-content: center;
    align-items: center;
    flex-direction: row;
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
`
export const ButtonItem = styled.View`
    width:28%;
    height: 24px;
`
export const BoxErrorText = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 4%;
`