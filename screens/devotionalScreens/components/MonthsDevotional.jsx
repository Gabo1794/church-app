import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const MonthsDevotional = () => {
  const list = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <View>
      {list.map((month, index) => (
        <ListItem key={index} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>
              {index === 3 ? `${month} (actual)` : month}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default MonthsDevotional;
