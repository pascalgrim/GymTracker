import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Touchable,
  Image,
} from "react-native";
import { Button, Divider, Headline, IconButton } from "react-native-paper";
import { auth } from "../../firebase";
import SessionsItem from "../../components/SessionsItem";
import { Colors } from "../../colors";
import MyProgressChart from "../../components/MyProgressChart";

import myTheme from "../../myTheme";
import HeaderRoutes from "../HeaderRoutes";
import doubleArrow from "../../assets/imgs/doublearrow.png";
import MyText from "../../components/MyText";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderRoutes />
      <View>
        <MyText
          text={`Hi ${auth.currentUser.displayName} 🖐`}
          bold
          fontSize={30}
        />
      </View>

      <View style={styles.pointsContainer}>
        <View style={{ height: 220, marginBottom: 20 }}>
          <MyProgressChart />
        </View>
        <MyText text="Deine aktuellen Gym Points" fontSize={18} />
        <Text
          style={{
            color: Colors.red,
            paddingLeft: 15,
            fontSize: 20,
            fontFamily: "Poppins_700Bold",
            fontSize: 28,
          }}
        >
          137 318<Text style={{ color: "white" }}> GP</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.sessionStartenButton}
        onPress={() => navigation.navigate("NewSessionFirstInfo")}
      >
        <MyText text="Session starten" fontSize={20} />
        <Image source={doubleArrow} style={{ height: 55, width: 55 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#131321",
    paddingLeft: 35,
    paddingRight: 35,
  },
  header: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  pointsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  sessionStartenButton: {
    backgroundColor: Colors.offColor,
    borderRadius: 20,
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    marginTop: 30,
  },
});
