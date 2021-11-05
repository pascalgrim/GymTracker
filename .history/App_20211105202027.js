import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import MenuCard from "./components/menuCard";

// LOGOS
import mainLogo from "./imgs/mainLogo.png";
import SettingsIcon from "./imgs/mainSettings.png";

// ICONS FOR CARDS
import IconSessions from "./imgs/schreibe-brief.png";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import TestScreen from "./components/testScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Dashboard/> */}
      {/* <Signup/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131321",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
