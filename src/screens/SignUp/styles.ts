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
