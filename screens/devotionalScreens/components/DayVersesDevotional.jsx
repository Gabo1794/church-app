import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

const DayVersesDevotional = () => {
  return (
    <View>
      <Card>
        <Card.Title>Lunes 22 de Marzo del 2022</Card.Title>
        <Card.Divider />
        <View key={1} style={styles.user}>
          <Text style={styles.name}>Juan 3:16</Text>
          <Text style={styles.name}>
            Porque de tal manera amó Dios al mundo, que ha dado a su Hijo
            unigénito, para que todo aquel que en él cree no se pierda, sino que
            tenga vida eterna. »Porque de tal manera amó Dios al mundo, que ha
            dado a su Hijo unigénito para que todo aquel que en él cree no se
            pierda mas tenga vida eterna.
          </Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DayVersesDevotional;
