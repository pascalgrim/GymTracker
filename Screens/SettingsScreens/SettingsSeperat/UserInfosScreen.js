import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import myStyle from "../../../mystyle";
import InputFieldEdit from "./inputFieldEdit";
import Header from "../Header";
import { auth } from "../../../firebase";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function UserInfosScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);
  const [password, setPassword] = useState();

  const handlePress = () => {
    console.log("hi");
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {
        console.log("Name got updated");
      })
      .catch((error) => {
        console.log(error);
      });

    updateEmail(auth.currentUser, "email@gmx.de")
      .then(() => {
        console.log("Email got updated");
      })
      .catch((error) => {
        console.log(error);
      });

    if (password !== "") {
      updatePassword(auth.currentUser, password)
        .then(() => {
          console.log("Password got updated");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    navigation.replace("Settings");
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Kontoinformationen" />
      <View style={myStyle.mainContent}>
        <InputFieldEdit
          title="Benutzername"
          value={username}
          setValue={setUsername}
        />
        <InputFieldEdit title="E-Mail" value={email} setValue={setEmail} />
        <InputFieldEdit
          title="Neues Passwort"
          value={password}
          setValue={setPassword}
        />
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Bestätigen
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
