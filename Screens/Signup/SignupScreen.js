import React from "react";
import { Button, TextInput, DarkTheme, HelperText } from "react-native-paper";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../colors";
import myTheme from "../../myTheme";
import MyText from "../../components/MyText";
import { DBM } from "../../DatabaseManager";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Dashboard");
      }
    });
    return unsubscribe;
  }, []);

  const handleAlreadyHaveAccount = () => {
    navigation.navigate("Login");
  };

  const handleSubmit = () => {
    auth
      .createUserWithEmailAndPassword(email, pw)
      .then((userCredentials) => {
        const user = userCredentials.user;
        DBM.createUser(user);
      }, setErr(""))
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <MyText text="Lass uns anfangen..." fontSize={35} bold />
      </View>
      <View style={{ flex: 3 }}>
        <TextInput
          theme={myTheme}
          label="Email"
          mode="outlined"
          value={email}
          style={styles.textInput}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          theme={myTheme}
          label="Passwort"
          mode="outlined"
          secureTextEntry={true}
          value={pw}
          style={styles.textInput}
          onChangeText={(pw) => setPw(pw)}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <MyText text="Registrieren" color="black" fontSize={20} bold />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAlreadyHaveAccount}>
          <View style={styles.bottom}>
            <MyText text="Ich habe schon einen Account" centered />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 20,
    backgroundColor: Colors.bg,
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  bottom: {
    marginTop: 50,
    color: "white",
    textAlign: "center",
  },
});
