import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from "../firebase/config";
import { AllChurches } from '../constants/StorageConstants';

const GetChurches = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { docs } = await store.collection("Churches").get();

      if (!docs) {
        return null;
      }

      const churches = docs.map((item) => ({
        Id: item.id,
        ...item.data(),
      }));

      if (churches.length <= 0) return null;

      resolve(200);
      AsyncStorage.setItem(AllChurches, JSON.stringify(churches));
    } catch {
      reject(500);
    }
  });
};

export { GetChurches };
