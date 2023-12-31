import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
  deleteObject,
} from "firebase/storage";

export type ItemData = {
  id: string;
  name: string;
  downloadURL: string;
  contentType: string;
  uploadDate: Date;
};

export const SearchService = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ItemData[]>([]);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, "uploads");

    const searchItems = async () => {
      try {
        const fileList = await listAll(storageRef);
        const promises = fileList.items.map(async (item) => {
          const [downloadURL, metadata] = await Promise.all([
            getDownloadURL(item),
            getMetadata(item),
          ]);

          return {
            id: item.name,
            name: item.name,
            downloadURL,
            contentType: metadata.contentType,
            uploadDate: new Date(metadata.timeCreated),
          };
        });

        Promise.all(promises).then((results) => {
          const filteredResults = results.filter((result) =>
            result.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSearchResults(filteredResults);
        });
      } catch (error) {
        console.error("Erro ao listar arquivos:", error);
        setSearchResults([]);
      }
    };

    searchItems();
  }, [searchQuery]);

  const deleteItem = async (itemId: string) => {
    try {
      const storage = getStorage();
      const itemRef = ref(storage, `uploads/${itemId}`);
      await deleteObject(itemRef);

      setSearchResults((prevResults) =>
        prevResults.filter((result) => result.id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return { searchResults, searchQuery, setSearchQuery, deleteItem };
};
