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
import MenuCard from "./menuCard";
import Header from "./Header";

// LOGOS
import mainLogo from "../imgs/mainLogo.png";
import SettingsIcon from "../imgs/mainSettings.png";

// ICONS FOR CARDS
import IconSessions from "../imgs/schreibe-brief.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.cardsContainer}>
        <MenuCard
          title="Sessions"
          logo={IconSessions}
          offText="pro Woche"
          mainText="4.6"
          color="#499DFF"
        />
        <MenuCard
          title="Übungen"
          logo={IconSessions}
          offText="Lieblinsübung"
          mainText="Squats"
          color="#499DFF"
        />
        <MenuCard
          title="Gewicht"
          logo={IconSessions}
          offText="seit letzter Woche"
          mainText="+0.3 Kg"
          color="#499DFF"
        />
        <MenuCard
          title="Zeit"
          logo={IconSessions}
          offText="durschn. Training"
          mainText="68min"
          color="#499DFF"
        />
        <MenuCard
          title="Fortschritt"
          logo={IconSessions}
          offText="Volumen"
          mainText="4.6"
          color="#499DFF"
          isBig={true}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  cardsContainer: {
    flex: 10,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  
});
