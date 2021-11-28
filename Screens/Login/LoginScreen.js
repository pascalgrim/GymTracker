import React from "react";
import { Button, TextInput, DarkTheme, HelperText } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRef, useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../colors";
import myTheme from "../../myTheme";
import MyText from "../../components/MyText";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Dashboard");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pw)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error));
  };
  const handleNoAccount = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <MyText text="Wilkommen zurück :)" fontSize={35} bold />
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
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <MyText text="Login" color="black" fontSize={20} bold />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNoAccount}>
          <View style={styles.bottom}>
            <MyText text="Ich habe noch keinen Account" centered />
          </View>
        </TouchableOpacity>
      </View>
      <Button
        theme={myTheme}
        onPress={() =>
          auth.signInWithEmailAndPassword("admin@gmx.de", "admin12345")
        }
      >
        <MyText text="Admin Login" />
      </Button>
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
