import { useState } from "react";
import { Text } from "../Text/Text";
import Button from "../UI/Button/Button";
import { 
    AuthenticationContainer, 
    BoxGoogle, 
    BoxLine, 
    BoxText, 
    ButtonItem, 
    Line, 
    TextItem

} from "./styles";
import { useNavigation } from "@react-navigation/native";



export default function AuthenticationMethods(){
    const navigation = useNavigation<any>();
    return(
        <AuthenticationContainer>
        <Line />
        <BoxLine>
          <Text size={16} color="primary" weight="maximum">
            Or
          </Text>
        </BoxLine>
        <BoxGoogle>
          <BoxText>
            <TextItem>
              <Text size={16} color="dark" weight="medium">
                Don't have an accout?
              </Text>
            </TextItem>
            <ButtonItem>
              <Button
                buttoncolor="backgroundWhite"
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text size={16} color="primary" weight="medium">
                  Register Now
                </Text>
              </Button>
            </ButtonItem>
          </BoxText>
         
        </BoxGoogle>
      </AuthenticationContainer>
    )
}