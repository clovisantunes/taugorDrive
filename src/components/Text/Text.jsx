import { TextStyled } from "./styles"


export const Text = ({ size = 14, weight = 'medium', color = 'white', children }) => {
    return (
       <TextStyled size={size} color={color} weight={weight}>{children}</TextStyled>
    )
 }