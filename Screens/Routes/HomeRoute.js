import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Divider, Headline, IconButton } from "react-native-paper";
import { auth } from "../../firebase";
import SessionsItem from "../../components/SessionsItem";
import { Colors } from "../../colors";
import MyProgressChart from "../../components/MyProgressChart";
import Achievement from "../AchievmentsScreens/achievement";
import myTheme from "../../myTheme";
import HeaderRoutes from "../HeaderRoutes";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderRoutes />
      <View>
        <Text style={{ color: "white", fontSize: 16, paddingBottom: 10 }}>
          Herausforderungen
        </Text>
        <ScrollView horizontal={true}>
          <Achievement />
          <Achievement />
          <Achievement />
        </ScrollView>
      </View>
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
});
