import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GetChurches } from "./services/churches";
import { GetChurchActiveGoal } from "./services/churchGoals";
import { GetGoalVersesDevotional } from "./services/goalVersesDevotional";
import {
  AllChurches,
  ChurchActiveGoal,
  GoalVersesDevotional,
} from "./constants/StorageConstants";

import Header from "./components/Header";
import ToDayScreen from "./screens/ToDayScreen";
import CreateAccountScreen from "./screens/accountScreens/CreateAccountScreen";
import VersesDevotionalScreen from "./screens/devotionalScreens/VersesDevotionalScreen";

export default function App() {
  const [churches, setChurches] = useState(null);
  const [churchActiveGoal, setChurchActiveGoal] = useState(null);
  const [goalVersesDevotional, setGoalVersesDevotional] = useState(null);

  const [currentTab, setCurrentTab] = useState("1");

  useEffect(() => {
    if (!churches) {
      GetChurchList();
    }

    if (!churchActiveGoal) {
      GetChurchGoalById();
    }

    if (!goalVersesDevotional) {
      GetGoalVersesDevotionalById();
    }
  }, [churches, churchActiveGoal, goalVersesDevotional]);

  const GetChurchList = async () => {
    try {
      const hasAllChurches = await GetChurches();

      if (hasAllChurches === 500)
        throw new Error("No fue posible obtener las iglesias");

      let allChurches = await AsyncStorage.getItem(AllChurches);
      allChurches = JSON.parse(allChurches);
      setChurches(allChurches);
      // console.log(allChurches);

      // if(allChurches && allChurches.length > 0) console.log("====>", allChurches);
    } catch {
      throw new Error("No fue posible obtener las iglesias");
    }
  };

  const GetChurchGoalById = async () => {
    try {
      const hasChurchGoals = await GetChurchActiveGoal("jmljn9qNhhZHACyrHye7");

      if (hasChurchGoals === 500)
        throw new Error("No fue posible obtener la visi??n de la iglesia.");

      let churchGoal = await AsyncStorage.getItem(ChurchActiveGoal);
      churchGoal = JSON.parse(churchGoal);
      setChurchActiveGoal(churchGoal);
      // console.log("==>",churchGoal);
    } catch {
      throw new Error("No fue posible obtener la visi??n de la iglesia.");
    }
  };

  const GetGoalVersesDevotionalById = async () => {
    try {
      const hasVersesDevotional = await GetGoalVersesDevotional(
        "7KAweKJuDORLoUbUVNfh"
      );

      if (hasVersesDevotional === 500)
        throw new Error("No fue posible obtener los vers??culos de la iglesia.");

      let versesDevotional = await AsyncStorage.getItem(GoalVersesDevotional);
      versesDevotional = JSON.parse(versesDevotional);
      setGoalVersesDevotional(versesDevotional);
      // console.log("==>", versesDevotional);
    } catch {
      throw new Error("No fue posible obtener los vers??culos de la iglesia.");
    }
  };

  const onHandleChangeTab = (tabSelected) => {
    setCurrentTab(tabSelected);
  };

  const onHandleShowCurrentScreen = () => {
    switch (currentTab) {
      case "1":
        return <ToDayScreen />;
      case "2":
        return <VersesDevotionalScreen />;
      default:
        return <CreateAccountScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Header currentTab={currentTab} onHandleChangeTab={onHandleChangeTab} />

      {onHandleShowCurrentScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
