import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ currentTab, onHandleChangeTab }) => {
  return (
    <View style={styles.header}>
      <Text
        style={
          currentTab === "1"
            ? [styles.optionsHeader, styles.optionsHeaderSelected]
            : styles.optionsHeader
        }
        onPress={() => onHandleChangeTab("1")}
      >
        Meses
      </Text>
      <Text
        style={
          currentTab === "2"
            ? [styles.optionsHeader, styles.optionsHeaderSelected]
            : styles.optionsHeader
        }
        onPress={() => onHandleChangeTab("2")}
      >
        Días
      </Text>
      <Text
        style={
          currentTab === "3"
            ? [styles.optionsHeader, styles.optionsHeaderSelected]
            : styles.optionsHeader
        }
        onPress={() => onHandleChangeTab("3")}
      >
        Versículos
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#0079C0",
    paddingBottom: 10,
  },
  optionsHeader: {
    fontSize: 15,
    paddingBottom: 5,
  },
  optionsHeaderSelected: {
    borderBottomWidth: 3,
    borderBottomColor: "#F5821E",
    fontWeight: "bold",
  },
});

export default Header;
