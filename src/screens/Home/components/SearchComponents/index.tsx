import Button from "../../../../components/UI/Button/Button";
import InputItem from "../../../../components/UI/Input/Input";
import { SearchService } from "../../services/SearchItemService";
import { Text } from "../../../../components/Text/Text";
import {
  ButtonBox,
  ButtonSearch,
  ContainerItem,
  InputContainer,
  RenderItem,
  SearchBox,
  SearchItem,
} from "./styles";
import { useState } from "react";
import Modal from "react-native-modal";

type SearchProps = {
  id: number;
  name: string;
};

export default function SearchComponent({ id, name }: SearchProps) {
  const { searchResults, searchQuery, setSearchQuery } = SearchService();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);


  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };
  
  return (
    <InputContainer>
      <SearchBox>
        <SearchItem>
          <InputItem
            name="Search"
            type="text"
            placeholder="Pesquisar..."
            onChangeText={(text) => setSearchQuery(text)}
          />
        </SearchItem>
        <ButtonSearch>
          <Button buttoncolor="primary" text="Search" onPress={handleSearch} />
        </ButtonSearch>
      </SearchBox>
      <ContainerItem>
      <RenderItem>
        {searchResults.map((item) => (
          <ButtonBox>
            <Button
              key={item.id}
              buttoncolor="primary"
              onPress={() => openModal(item)}
            >
              {item.name}
            </Button>
          </ButtonBox>
        ))}
      </RenderItem>
      </ContainerItem>
      <Modal isVisible={isModalVisible}>
        <ContainerItem>
          {selectedItem && (
            <ContainerItem>
              <Text>Name: {selectedItem.name}</Text>
              <Text>ID: {selectedItem.id}</Text>
      
              <Button buttoncolor="secondary"  onPress={closeModal}>
                <Text>X</Text>
              </Button>
            </ContainerItem>
          )}
        </ContainerItem>
      </Modal>
    </InputContainer>
  );
}