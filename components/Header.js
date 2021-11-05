import React from 'react'
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
  } from "react-native";

// LOGOS
import mainLogo from "../imgs/mainLogo.png";
import SettingsIcon from "../imgs/mainSettings.png";

export default function Header() {
    return (
        
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
        
    )
}



const styles = StyleSheet.create({
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
})
