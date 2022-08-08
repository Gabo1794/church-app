import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const MonthDaysDevotional = ({ selectedDay, selectedMonth, daysOfMonth, onHandleChangeDays, onHandleChangeTab }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  const calendar = () => {
    const data = [];
    for (let i = 1; i <= daysOfMonth; i++) {
      data.push(
        <TouchableOpacity key={i} style={ styles.textDay } onPress={() => { onHandleChangeDays(i), onHandleChangeTab("3") }}>
          <Text style={ (i === currentDay && currentMonth === selectedMonth) ? styles.textToDay : null }>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }
    return data;
  };

  return <View style={styles.container}>{calendar()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "center",
  },
  textDay: {
    width: "20%",
    textAlign: "center",
    height: 50,
    textAlignVertical: "center",
  },
  textToDay: {
    fontWeight: "bold",
    fontSize: 15,
    textDecorationColor: "#F5821E",
    textDecorationLine: "underline",
    textDecorationStyle: "solid"
  },
});

export default MonthDaysDevotional;
