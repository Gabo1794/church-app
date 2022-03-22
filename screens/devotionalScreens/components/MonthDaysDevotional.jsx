import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const MonthDaysDevotional = () => {
  const calendar = () => {
    const data = [];
    for (let i = 1; i <= 31; i++) {
      data.push(
        <Text style={i === 22 ? [styles.textDay, styles.textToDay] : styles.textDay} key={i}>
          {i}
        </Text>
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
  },
});

export default MonthDaysDevotional;
