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
export const TextTitle = styled.View`
    width: 60%;
`
export const ContainerItems = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const InputBox = styled.View`
    width: 85%;
    align-items: center;
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
`
export const BoxErrorText = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 8%;
`