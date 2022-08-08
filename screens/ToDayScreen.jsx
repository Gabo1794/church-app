import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ToDayScreen = ({loginDate, churchActiveGoal, goalVersesDevotional }) => {
  // const [loginDate, setLoginDate] = useState(null);
  const [goalDescription, setGoalDscription] = useState(null);
  const [verseOfDay, setVerseOfDay] = useState(null);
  const [verseOfDayDescription, setVerseOfDayDescription] = useState(null);

  useEffect(() => {

    if(churchActiveGoal) onHandleGoalDescription();

    if(goalVersesDevotional) onHandleVerseOfDay();

  },[churchActiveGoal, goalVersesDevotional]);

  const onHandleGoalDescription = () => {
    setGoalDscription(churchActiveGoal[0].Description)
  }

  const onHandleVerseOfDay = () => {
    const { Book, Chapter, Description, Verse} = goalVersesDevotional[0];

    
    setVerseOfDay(`${Book} ${Chapter}:${Verse}`);
    setVerseOfDayDescription(Description);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <Text style={styles.optionText}>{loginDate}</Text>
      <Text style={styles.goalText}>"{goalDescription}"</Text>
      <Text style={styles.optionText}>{verseOfDay}</Text>
      <Text style={styles.verseText}>{verseOfDayDescription}</Text>
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
