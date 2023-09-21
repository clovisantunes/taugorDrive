import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
    width: 100%;
`
export const TextTitle = styled.Text`
  position: absolute;
  top: 0;
  font-size: ${theme.colors.title.fontSize}px;
  color: ${theme.colors.title.color};
`;