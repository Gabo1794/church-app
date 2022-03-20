import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const Header = ({ currentTab, onHandleChangeTab }) => {

  return (
    <View style={styles.header}>
      <Text
        style={currentTab === "1" ? [styles.optionsHeader, styles.optionsHeaderSelected] : styles.optionsHeader}
        onPress={() => onHandleChangeTab("1")}
      >
        Hoy
      </Text>
      <Text 
        style={currentTab === "2" ? [styles.optionsHeader, styles.optionsHeaderSelected] : styles.optionsHeader}
        onPress={() => onHandleChangeTab("2")}
        >
        Devocional
      </Text>
      <Avatar
        size={40}
        rounded
        title="US"
        containerStyle={{ backgroundColor: "#0079C0" }}
        onPress={() => onHandleChangeTab("3")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#0079C0",
    paddingBottom: 10,
  },
  optionsHeader: {
    fontSize: 20,
    paddingBottom: 5,
  },
  optionsHeaderSelected: {
    borderBottomWidth: 3,
    borderBottomColor: "#F5821E",
    fontWeight: "bold",
  },
});

export default Header;
