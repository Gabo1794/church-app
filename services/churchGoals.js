import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../firebase/config";
import { ChurchActiveGoal } from "../constants/StorageConstants";

const GetChurchActiveGoal = (churchId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { docs } = await store
        .collection("ChurchGoals")
        .where("ChurchId", "==", churchId)
        .where("IsActive", "==", true)
        .get();

      if (!docs) {
        return null;
      }

      const churchGoals = docs.map((item) => ({
        Id: item.id,
        ...item.data(),
      }));

      if (churchGoals.length <= 0) return null;

      resolve(200);
      AsyncStorage.setItem(ChurchActiveGoal, JSON.stringify(churchGoals));

    } catch {
      reject(500);
    }
  });
};

export { GetChurchActiveGoal };
