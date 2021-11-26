import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";
import { Colors } from "../../colors";
import { Divider, List, Menu } from "react-native-paper";
import SettingsItem from "./SettingsItem";
import myTheme from "../../myTheme";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const handle_logout = () => {
    console.log("hi");
    auth
      .signOut()
      .then(() => {
        navigation.replace("Start");
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Header title="Einstellungen" />
      <View style={styles.mainContent}>
        <Text style={styles.subtitle}>Konto</Text>
        <Divider theme={myTheme} />
        <SettingsItem
          text="Kontoinformation"
          description="Siehe dir deine Kontoinformationen an"
          navScreen="UserInfoScreen"
        />
        <SettingsItem
          text="E-Mail und Passwort ändern"
          description="Hier kannst du Email und Passwort ändern"
          navScreen="NeueEmailScreen"
        />
        <SettingsItem
          text="Ausloggen"
          description="Logge dich aus dem Account aus"
          onPress={handle_logout}
        />
        <SettingsItem
          text="Konto löschen"
          description="Lösche deinen Account entgültig"
          onPress={handle_logout}
          color="red"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  text: {
    color: "white",
  },
  description: {
    color: "grey",
  },
});
