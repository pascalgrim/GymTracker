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

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Image source={mainLogo} style={styles.mainLogo} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>GYM</Text>
            <Text style={styles.headerText}>TRACKER</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image source={SettingsIcon} style={styles.settingsIcon}></Image>
          </TouchableOpacity>
        </View>
      </View>
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
