import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.backgroundBlack};
`
export const TextContainer = styled.View`
  margin-top: 16%;
  align-items: center;
`
export const TextWelcome = styled.Text`
  
`
export const ButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`
export const ButtonBox = styled.View`
  width: 160px;
  height: 160px;
  margin-bottom: 8%;
`
export const FreeStorageContainer = styled.View`
  width: 50%;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8%;
`
export const FreeStorageBox = styled.View`
  margin-bottom: 2%;
`
export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`
export const SearchItem = styled.View`
 width: 70%;
 margin: 0 2% 0 4%;
`
export const ButtonSearch = styled.View`
  width: 20%;
  height: 45px;
`