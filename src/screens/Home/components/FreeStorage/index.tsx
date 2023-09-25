
import { Text } from "../../../../components/Text/Text";
import { FreeStorageContainer, FreeStorageBox } from "./styles";
import { FreeStorageService } from "../../services/FreeStorageService";

export default function FreeStorage() {
  const storageUsage = FreeStorageService();

  return (
    <FreeStorageContainer>
      <FreeStorageBox>
        <Text>Free Storage</Text>
      </FreeStorageBox>
      <FreeStorageBox>
        <Text>{`${storageUsage.toFixed(2)} MB`}</Text>
      </FreeStorageBox>
      <FreeStorageBox>
        <Text>From total 1Gb</Text>
      </FreeStorageBox>
    </FreeStorageContainer>
  );
}
