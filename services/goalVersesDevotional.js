import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../firebase/config";
import { GoalVersesDevotional } from "../constants/StorageConstants";

const GetGoalVersesDevotional = (goalId, dateToSearchStart, dateToSearchEnd) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { docs } = await store
        .collection("VersesDevotional")
        .where("ReadingDate", ">", dateToSearchStart)
        .where("ReadingDate", "<", dateToSearchEnd)
        // .where("GoalId", "==", goalId)
        .get();

        console.log("Docs ==>", docs );
  
        if (!docs) {
          return null;
        }
  
        const versesDevotional = docs.map((item) => ({
          Id: item.id,
          ...item.data(),
        }));

        if (versesDevotional.length <= 0) reject(500);

        resolve(200);
        AsyncStorage.setItem(GoalVersesDevotional, JSON.stringify(FindGoalById(goalId, versesDevotional)));
  
      } catch(e) {
        reject(500);
      }
    });
  };

  const FindGoalById = (goalId, goals) => {
    let verses = goals.map(goal => 
      {  
        if(goal.GoalId === goalId) return goal;
      });
    return verses;
  }
  
  export { GetGoalVersesDevotional };
  