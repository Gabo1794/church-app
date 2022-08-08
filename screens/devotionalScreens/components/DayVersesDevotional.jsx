import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import { weekDays, months } from '../../../constants/DateConstants';
import {
  ChurchActiveGoal,
  GoalVersesDevotional,
} from "../../../constants/StorageConstants";
import { GetGoalVersesDevotional } from "../../../services/goalVersesDevotional";
import firebase from "firebase/app";

const DayVersesDevotional = ({ selectedDay, selectedMonth }) => {  
  const [daySelected, setDaySelected] = useState(selectedDay);
  const [monthSelected, setMonthSelected] = useState(selectedMonth);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [titleCard, setTitleCard] = useState("");
  const [versesDevotional, setVersesDevotional] = useState([]);

  useEffect(() => {
    onHandleChangeDateTitleCard();
    GetVersesOfDayByGoalId();
  }, [selectedDay, selectedMonth, currentYear]);

  const onHandleChangeDateTitleCard = () => {
    const date = new Date(currentYear, monthSelected, daySelected);
    const dayName = date.getDay();

    setTitleCard(
      `${weekDays[dayName]} ${daySelected} de ${months[monthSelected]} del ${currentYear}`
    );
  };

  const GetVersesOfDayByGoalId = async () => {
    try {
      let churchGoal = await AsyncStorage.getItem(ChurchActiveGoal);
      churchGoal = JSON.parse(churchGoal);
      
      if (!churchGoal || churchGoal.length === 0) return null;

      const { Id } = churchGoal[0];
      const beginDate = new Date(
        `${currentYear}-${monthSelected + 1}-${daySelected} 00:00:00`
      );
      const endDate = new Date(
        `${currentYear}-${monthSelected + 1}-${daySelected} 23:59:59`
      );

      const dateStart = firebase.firestore.Timestamp.fromDate(beginDate);
      const dateEnd = firebase.firestore.Timestamp.fromDate(endDate);

      const hasVersesDevotional = await GetGoalVersesDevotional(
        Id,
        dateStart,
        dateEnd
      );

       if(hasVersesDevotional === 200){
          let versesDevotional = await AsyncStorage.getItem(GoalVersesDevotional);
          versesDevotional = JSON.parse(versesDevotional);
    
          setVersesDevotional(versesDevotional);
       } 

    } catch (e) {
      throw new Error("No fue posible obtener los versículos de la iglesia.");
    }    
  };

  const onHandleCardVerses = verse => {
    const { Verse, Book, Chapter, Description, Id } = verse;
    return (
      <Card key={Id}>
      <Card.Title>{titleCard}</Card.Title>
      <Card.Divider />
      <View key={1} style={styles.cardContainer}>
        <Text style={styles.name}>{Book} {Chapter} : {Verse}</Text>
        <Text style={styles.name}>
          {Description}
        </Text>
      </View>
    </Card>
    )
  };

  return (
    <View>
      {
        versesDevotional.map(verse => onHandleCardVerses(verse))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 6,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DayVersesDevotional;
