import { Text } from "../Text/Text";
import { BoxErrorText } from "./styles";

interface AuthProps{
    error: string;
}

export default function AuthError({error}: AuthProps){
    return(
        <BoxErrorText>
        {error && (
          <Text size={18} color="dark" weight="maximum">
            {error}
          </Text>
        )}
      </BoxErrorText>
    )
}