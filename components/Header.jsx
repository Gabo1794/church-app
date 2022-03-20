import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={[styles.optionsHeader, styles.optionsHeaderSelected]}>Hoy</Text>
      <Text style={styles.optionsHeader}>Devocional</Text>
      <Avatar
        size={40}
        rounded
        title="US"
        containerStyle={{ backgroundColor: "#0079C0" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    header:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: 5,
      borderBottomWidth: 1,
      borderBottomColor: "#0079C0",
      paddingBottom: 10
    },
    optionsHeader: {
        fontSize: 20,
        paddingBottom: 5
    },
    optionsHeaderSelected: {
        borderBottomWidth: 3,
        borderBottomColor: "#F5821E",
        fontWeight: "bold"
    }
  });
  

export default Header;
