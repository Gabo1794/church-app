import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  Button,
  Input,
  Icon,
  ListItem,
  Avatar,
  Image,
} from "react-native-elements";
import imageIcon from "../../assets/mdf-logo.jpg";

const ChurchSelected = ({ churches, setChurchSelected }) => {
  const [listChurch, setListCurch] = useState([]);

  useEffect(() => {
    if (listChurch && listChurch.length === 0 && churches)
      setListCurch(churches);
  }, [churches, listChurch]);

  const onHandleSearchChurch = (element) => {
    let churchesFinded = churches.find((curch) =>
      curch.Name.toLowerCase().includes(element)
    );

    if (churchesFinded) setListCurch(churches);
    else setListCurch(null);
  };

  const onChurchSelected = (churchId) => {
    setChurchSelected(churchId);
  };

  return (
    <View style={styles.container}>
      <Image
        // source={{ uri: imageIcon }}
        // source={require("../../src/images/mdf-logo.jpg")}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Busca tu iglesia preferida..."
        leftIcon={{ type: "font-awesome", name: "search" }}
        style={{ marginBottom: 20 }}
        onChangeText={onHandleSearchChurch}
      />

      <View style={styles.listChurches}>
        {listChurch
          ? listChurch.map((l, i) => (
              <TouchableOpacity key={i} onPress={() => onChurchSelected(l.Id)}>
                <ListItem key={l.Id} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{l.Name}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </TouchableOpacity>
            ))
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "20px",
    marginTop: "30px",
    alignItems: "center",
    // height: "300px",
    // maxHeight: "400px"
    // backgroundColor: "#898B8D",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  listChurches: {
    width: "100%",
    //   height: "300px",
    //   maxHeight:
  },
  // fonts: {
  //   marginBottom: 8,
  // },
  // user: {
  //   marginBottom: 6,
  // },
  // image: {
  //   width: 30,
  //   height: 30,
  //   marginRight: 10,
  // },
  // name: {
  //   fontSize: 16,
  //   marginTop: 5,
  // },
});

export default ChurchSelected;
