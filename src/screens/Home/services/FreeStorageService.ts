import { useEffect, useState } from "react";
import { getDatabase, ref, get } from 'firebase/database';

export const FreeStorageService = () =>{
    const [storageUsage, setStorageUsage] = useState(0);

    useEffect(() => {
      const fetchStorageUsage = async () => {
        try {
          const database = getDatabase();
          const storageRef = ref(database, 'storage_usage/usage');
  
          const snapshot = await get(storageRef);
          if (snapshot.exists()) {
            const currentUsageInBytes = snapshot.val();
            const currentUsageInMB = currentUsageInBytes / (1024 * 1024);
            setStorageUsage(currentUsageInMB);
          }
        } catch (error) {
          console.error('Erro ao buscar o uso de armazenamento:', error);
        }
      };
      fetchStorageUsage();
    }, []);
    return storageUsage;
}