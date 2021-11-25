import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

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
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Jetzt loslegen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handle_login_press}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Ich habe schon einen Account.
          </Text>
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
