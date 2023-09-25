import { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export type ItemData = {
  id: string;
  name: string;
  downloadURL: string;
};

export const SearchService = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ItemData[]>([]);

  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, "uploads"); // Substitua "uploads" pelo caminho correto em seu Storage.

    const searchItems = async () => {
      try {
        const fileList = await listAll(storageRef);
        const promises = fileList.items.map(async (item) => {
          const downloadURL = await getDownloadURL(item);
          return { id: item.name, name: item.name, downloadURL };
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

  return { searchResults, searchQuery, setSearchQuery };
};
