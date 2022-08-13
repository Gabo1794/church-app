import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, Input, Icon } from "react-native-elements";

const CreateAccountScreen = () => {
  const [userCreate, setUserCreate] = useState({});

  const onHandleChangeUserInformation = (nameOfProperty,text) => {
    switch(nameOfProperty){
      case "name":
        setUserCreate({...userCreate, Name: text.trim()})
      break;
      case "lastName":
        setUserCreate({...userCreate, LastName: text.trim()})
      break;
      case "email":
        setUserCreate({...userCreate, Email: text.trim()})
      break;         
      case "password":
        setUserCreate({...userCreate, Password: text.trim()})
      break;
      case "confirmPassword":
        setUserCreate({...userCreate, ConfirmPassword: text.trim()})
      break;  
    }
  };

  const onFinish = () => {
    const { Name, LastName, Email, Password, ConfirmPassword } = userCreate;
    
    if(!Name || Name.length === 0 || Name === "" || Name === undefined) {
      console.log("===> ", Name);
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );      
    }


  };
  
  return (
    <View>
      <Text style={styles.title}>Creación de cuenta</Text>
      <Input
        placeholder="Nombre"
        leftIcon={{ type: "font-awesome", name: "user" }}
        onChangeText={(text) => onHandleChangeUserInformation("name", text)}
      />
      <Input
        placeholder="Apellido"
        leftIcon={{ type: "font-awesome", name: "user" }}
        onChangeText={(text) => onHandleChangeUserInformation("lastName", text)}
      />
      <Input
        placeholder="Correo electrónico"
        leftIcon={{ type: "font-awesome", name: "at" }}
        onChangeText={(text) => onHandleChangeUserInformation("email", text)}
      />
      <Input
        placeholder="Contraseña"
        leftIcon={{ type: "font-awesome", name: "key" }}
        secureTextEntry={true}
        onChangeText={(text) => onHandleChangeUserInformation("password", text)}
      />
      <Input
        placeholder="Confirmar contraseña"
        leftIcon={{ type: "font-awesome", name: "key" }}
        secureTextEntry={true}
        onChangeText={(text) => onHandleChangeUserInformation("confirmPassword", text)}
      />

      <Button
        title={"Crear cuenta"}
        buttonStyle={{
          backgroundColor: "#8A3E88",
          borderRadius: 5,
        }}
        containerStyle={{
          width: "100%",
          marginVertical: 10,
        }}
        onPress={() => onFinish()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default CreateAccountScreen;
