import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import MonthsDevotional from "./components/MonthsDevotional";
import MonthDaysDevotional from "./components/MonthDaysDevotional";
import DayVersesDevotional from "./components/DayVersesDevotional";

const VersesDevotionalScreen = ({ currentDay, currentMonth, currentYear }) => {
  const [currentTab, setCurrentTab] = useState("3");
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [daysOfMonth, setDaysOfMonth] = useState(0);

  useEffect(() => {
    onHandleChangeDaysofMonth();
  }, [selectedMonth]);

  const onHandleChangeTab = (tabSelected) => {
    setCurrentTab(tabSelected);
  };

  const onHandleChangeDaysofMonth = () => {
    setDaysOfMonth(new Date(currentYear, selectedMonth + 1, 0).getDate());
    // setCurrentTab("2")
  };

  const onHandleChangeDays = (daySelected) => {
    setSelectedDay(daySelected);
    // setCurrentTab("3")
  };

  const onHandleChangeMonth = (month) => {
    setSelectedMonth(month);
  };

  const onHandleShowCurrentScreen = () => {
    switch (currentTab) {
      case "1":
        return (
          <MonthsDevotional
            selectedMonth={selectedMonth}
            onHandleChangeMonth={onHandleChangeMonth}
            onHandleChangeTab={onHandleChangeTab}
          />
        );
      case "2":
        return (
          <MonthDaysDevotional
            selectedDay={selectedDay}
            selectedMonth={selectedMonth}
            daysOfMonth={daysOfMonth}
            onHandleChangeDays={onHandleChangeDays}
            onHandleChangeTab={onHandleChangeTab}
          />
        );
      case "3":
        return (
          <DayVersesDevotional
            selectedDay={selectedDay}
            selectedMonth={selectedMonth}
          />
        );
      default:
        return null;
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
