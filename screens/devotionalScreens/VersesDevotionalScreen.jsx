import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import MonthsDevotional from "./components/MonthsDevotional";
import MonthDaysDevotional from "./components/MonthDaysDevotional";
import DayVersesDevotional from "./components/DayVersesDevotional";

const VersesDevotionalScreen = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const onHandleChangeTab = (tabSelected) => {
    setCurrentTab(tabSelected);
  };

  const onHandleShowCurrentScreen = () => {
    switch (currentTab) {
      case "1":
        return <MonthsDevotional />;
      case "2":
        return <MonthDaysDevotional />;
      default:
        return <DayVersesDevotional />;
    }
  };
  return (
    <View>
      <Header currentTab={currentTab} onHandleChangeTab={onHandleChangeTab} />

      {onHandleShowCurrentScreen()}
    </View>
  );
};

export default VersesDevotionalScreen;
