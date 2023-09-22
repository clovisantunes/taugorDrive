import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.backgroundWhite};

`;
export const HomeContainer = styled.View`
  width: 85%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;
export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px 0 0 0;
  height: 160px;
`;

export const TextTitle = styled.Text`
  position: absolute;
  top: 0;
  font-size: ${theme.colors.title.fontSize}px;
  color: ${theme.colors.title.color};
`;
export const TextDescription = styled.Text`
  font-size: 24px;
  color: ${theme.colors.dark};
  font-weight: ${theme.fontWeight.minimum};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
export const ButtonBox = styled.View`
  width: 100px;
  height: 45px;
`

export const ImageHome = styled.Image`
  width: 120%;
  height: 60%;
  object-fit: cover;
`;
