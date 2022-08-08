import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import {weekDays,months } from '../../../constants/DateConstants';

const MonthsDevotional = ({ selectedMonth, onHandleChangeMonth, onHandleChangeTab }) => {


  return (
    <View>
      {months.map((month, index) => (
        <TouchableOpacity key={index} onPress={() => { onHandleChangeMonth(index), onHandleChangeTab("2") }}>
        <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={ index === selectedMonth ? styles.monthSelected : null }>
                {month}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  monthSelected : {
    fontWeight: "bold"
  }
})

export default MonthsDevotional;
