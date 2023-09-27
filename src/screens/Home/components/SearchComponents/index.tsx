import Button from "../../../../components/UI/Button/Button";
import InputItem from "../../../../components/UI/Input/Input";
import { SearchService } from "../../services/SearchItemService";
import { Feather } from '@expo/vector-icons';
import {
  ButtonBox,
  ButtonSearch,
  ContainerItem,
  InputContainer,
  RenderItem,
  SearchBox,
  SearchItem,
  ButtonItem,
  ButtonDelete
} from "./styles";
import { useState } from "react";
import Modal from "react-native-modal";
import ModalItem from "../../../../components/Modal/ModalItem";


type SearchProps = {
  id: string;
  name: string;
  
};

export default function SearchComponent({ id, name }: SearchProps) {
  const { searchResults, searchQuery, setSearchQuery, deleteItem } = SearchService();
  const [selectedItem, setSelectedItem] = useState<SearchProps | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);


  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const openModal = (item: SearchProps) => {
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
          <ButtonBox key={item.id}>
            <ButtonItem>
            <Button
              key={item.id}
              buttoncolor="primary"
              onPress={() => openModal(item)}
            >
              {item.name}
            </Button>
            </ButtonItem>
            <ButtonDelete>
            <Button buttoncolor="error" onPress={() => deleteItem(item.id)}>
              <Feather name="trash-2" size={24} color="white" />
            </Button>
            </ButtonDelete>
          </ButtonBox>
        ))}
      </RenderItem>
      </ContainerItem>
      <Modal isVisible={isModalVisible}>
        <ContainerItem>
          {selectedItem && (
            <ModalItem setModalVisible={isModalVisible}  closeModal={closeModal} selectedItem={selectedItem}/>
          )}
        </ContainerItem>
      </Modal>
    </InputContainer>
  );
}
