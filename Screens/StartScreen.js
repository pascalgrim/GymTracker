import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import MyText from "../components/MyText";

import { useNavigation } from "@react-navigation/native";
import { Colors } from "../colors";
import logoRed from "../assets/imgs/logo_red.png";

export default function NotLoggedInScreen() {
  const navigation = useNavigation();

  const handle_login_press = () => {
    navigation.navigate("Login");
  };
  const handle_signup_press = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
        <Image source={logoRed} style={styles.logo} />
      </View>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <TouchableOpacity style={styles.button} onPress={handle_signup_press}>
          <MyText text="Jetzt loslegen" color="black" fontSize={20} bold />
        </TouchableOpacity>
        <TouchableOpacity onPress={handle_login_press}>
          <MyText text="Ich habe schon einen Account." centered />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bg,
  },
  button: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 120,
    width: 120,
  },
});
