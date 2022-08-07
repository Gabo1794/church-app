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
import { weekDays, months } from  "./constants/DateConstants";

import Header from "./components/Header";
import ToDayScreen from "./screens/ToDayScreen";
import CreateAccountScreen from "./screens/accountScreens/CreateAccountScreen";
import VersesDevotionalScreen from "./screens/devotionalScreens/VersesDevotionalScreen";
import ChurchSelected from "./screens/churchScreens/ChurchSelected";
// import { fire } from "./firebase/config";
import firebase from 'firebase/app';

export default function App() {
  const [churches, setChurches] = useState(null);
  const [churchActiveGoal, setChurchActiveGoal] = useState(null);
  const [goalVersesDevotional, setGoalVersesDevotional] = useState(null);
  const [churchSelected, setChurchSelected] = useState(null);
  const [loginDate, setLoginDate] = useState(null);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  const [currentTab, setCurrentTab] = useState("1");

  useEffect(() => {
    if (!churches) {
      GetChurchList();
    }

    if (!churchActiveGoal && churchSelected) {
      GetChurchGoalById();
    }

    if (churchActiveGoal && !goalVersesDevotional) {
      GetGoalVersesDevotionalById();
    }

    onHandleLoginDate()
  }, [churches, churchActiveGoal, goalVersesDevotional, churchSelected]);

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
      const hasChurchGoals = await GetChurchActiveGoal(churchSelected);

      if (hasChurchGoals === 500)
        throw new Error("No fue posible obtener la visión de la iglesia.");

      let churchGoal = await AsyncStorage.getItem(ChurchActiveGoal);
      churchGoal = JSON.parse(churchGoal);
      setChurchActiveGoal(churchGoal);
      // console.log("==>",churchGoal);
    } catch {
      throw new Error("No fue posible obtener la visión de la iglesia.");
    }
  };

  const GetGoalVersesDevotionalById = async () => {
    try {
      const beginDate = new Date(`${currentYear}-${currentMonth+1}-${currentDay} 00:00:00`);
      const endDate = new Date(`${currentYear}-${currentMonth+1}-${currentDay} 23:59:59`);

      const dateStart = firebase.firestore.Timestamp.fromDate(beginDate);
      const dateEnd = firebase.firestore.Timestamp.fromDate(endDate);
      
      const hasVersesDevotional = await GetGoalVersesDevotional(
        churchActiveGoal[0].Id,
        dateStart,
        dateEnd
      );
        
      if (hasVersesDevotional === 500)
        throw new Error("No fue posible obtener los versículos de la iglesia.");

      let versesDevotional = await AsyncStorage.getItem(GoalVersesDevotional);
      versesDevotional = JSON.parse(versesDevotional);
      setGoalVersesDevotional(versesDevotional);
      console.log("==>", versesDevotional);
      /*
          Book: "Juan"
          Chapter: 3
          CreatedDate: {seconds: 1647724844, nanoseconds: 580000000}
          Description: "Porque de tal manera ...."
          GoalId: "7KAweKJuDORLoUbUVNfh"
          Id: "BUk1S6fZfadDPcUgNBBA"
          LastModificationDate: {seconds: 1647724844, nanoseconds: 580000000}
          ReadingDate: {seconds: 1647724837, nanoseconds: 252000000}
          Verse: 16      
      */
    } catch(e) {
      // throw new Error("No fue posible obtener los versículos de la iglesia.");
      console.log("Error ==>", e)
      throw new Error(e);
    }
  };

  const onHandleLoginDate = () => {
    const date = new Date();
    const dayName = date.getDay();
    const dateNumber = date.getDate();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();

    setLoginDate(`${weekDays[dayName]} ${dateNumber} de ${months[dateMonth]} del ${dateYear}`)
  };

  const onHandleChangeTab = (tabSelected) => {
    setCurrentTab(tabSelected);
  };

  const onHandleShowCurrentScreen = () => {
    switch (currentTab) {
      case "1":
        return <ToDayScreen loginDate={loginDate} churchActiveGoal={churchActiveGoal} goalVersesDevotional={goalVersesDevotional} />;
      case "2":
        return <VersesDevotionalScreen />;
      default:
        return <CreateAccountScreen />;
    }
  };

  const IndexHome = () => {
    if (!churchSelected) {
      return (
        <ChurchSelected
          churches={churches}
          setChurchSelected={setChurchSelected}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {/* <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" /> */}
          <Header
            currentTab={currentTab}
            onHandleChangeTab={onHandleChangeTab}
          />

          {onHandleShowCurrentScreen()}
        </View>
      );
    }
  };

  return IndexHome();
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
