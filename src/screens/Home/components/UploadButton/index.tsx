import { Octicons } from "@expo/vector-icons";
import ButtonSelect from "../../../../components/UI/ButtonSelect/ButtonSelect";
import { ButtonBox } from "./styles";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import * as DocumentPicker from 'expo-document-picker';


export default function UploadButton(){
  const storage = getStorage();

  const handleUploadPress = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      
      if (!result.canceled && result.assets.length > 0) {
        const selectedAsset = result.assets[0];
        const uri = selectedAsset.uri;
        const name = selectedAsset.name;
        const storageRef = ref(storage, `uploads/${name}`);
        const response = await fetch(uri);
        const blob = await response.blob();
        
        console.log(uri, name);
        
        await uploadBytes(storageRef, blob);

        console.log(`Upload realizado com sucesso! Arquivo ${name} enviado.`);
      } else {

        console.error(result);
      }
    } catch (err) {
      
      console.error('Erro durante o upload:', err);
    }
  };
  


    return(
        <ButtonBox>
        <ButtonSelect buttoncolor="primary" onPress={handleUploadPress}>
          <Octicons name="upload" size={72} color="white" />
        </ButtonSelect>
      </ButtonBox>
    )
}