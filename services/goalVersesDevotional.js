import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../firebase/config";
import { GoalVersesDevotional } from "../constants/StorageConstants";

const GetGoalVersesDevotional = (goalId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { docs } = await store
        .collection("VersesDevotional")
        .where("GoalId", "==", goalId)
        .get();
  
        if (!docs) {
          return null;
        }
  
        const versesDevotional = docs.map((item) => ({
          Id: item.id,
          ...item.data(),
        }));

  
        if (versesDevotional.length <= 0) return null;
  
        resolve(200);
        AsyncStorage.setItem(GoalVersesDevotional, JSON.stringify(versesDevotional));
  
      } catch(e) {
        reject(500);
      }
    });
  };
  
  export { GetGoalVersesDevotional };
  