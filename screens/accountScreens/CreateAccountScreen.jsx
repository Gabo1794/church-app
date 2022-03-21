import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Icon } from "react-native-elements";

const CreateAccountScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Creación de cuenta</Text>
      <Input
        placeholder="Nombre"
        leftIcon={{ type: "font-awesome", name: "user" }}
      />
      <Input
        placeholder="Apellido"
        leftIcon={{ type: "font-awesome", name: "user" }}
      />
      <Input
        placeholder="Correo electrónico"
        leftIcon={{ type: "font-awesome", name: "at" }}
      />
      <Input
        placeholder="Contraseña"
        leftIcon={{ type: "font-awesome", name: "key" }}
        secureTextEntry={true}
      />
      <Input
        placeholder="Confirmar contraseña"
        leftIcon={{ type: "font-awesome", name: "key" }}
        secureTextEntry={true}
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
