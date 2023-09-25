import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const AuthenticationContainer = styled.View`
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
    margin-top: 8%;
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
