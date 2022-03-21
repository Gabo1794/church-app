import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ToDayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <Text style={styles.optionText}>Sabado 19 de Marzo del 2022</Text>
      <Text style={styles.goalText}>"Selah"</Text>
      <Text style={styles.optionText}>Juan 3:16</Text>
      <Text style={styles.verseText}>
        Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito,
        para que todo aquel que en él cree no se pierda, sino que tenga vida
        eterna. »Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
        unigénito para que todo aquel que en él cree no se pierda mas tenga vida
        eterna.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
  },
  optionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  goalText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  verseText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ToDayScreen;
