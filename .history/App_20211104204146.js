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

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131321",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  //HEADER
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 40,
    height: 100,
  },

  headerLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  headerTextContainer: {
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
  },

  headerRight: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  cardsContainer: {
    flex: 8,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  //LOGOS - ICONS
  mainLogo: {
    height: 50,
    width: 50,
    transform: [{ rotate: "90deg" }],
  },
  settingsIcon: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
});
