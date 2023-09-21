import { Text } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const TextStyled = styled(Text)<{weight: string; size: number; color: string}>`
  font-weight: ${p => theme.fontWeight[p.weight]};
  font-size: ${p => p.size}px;
  color: ${p => theme.colors[p.color]};
` 