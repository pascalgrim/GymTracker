import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import { auth } from "../../firebase";
import SessionsItem from "../../components/SessionsItem";
import { Colors } from "../../colors";
import MyProgressChart from "../../components/MyProgressChart";

export default function Dashboard2() {
  const navigation = useNavigation();
  const handle_logout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Start");
      })
      .catch((error) => alert(error));
  };

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#131321",
  },
  mainContent: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
  },
  newSessionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  latestSessionsContainer: {
    flex: 1,
    overflow: "hidden",
    paddingBottom: 50,
  },
  latestTitle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },

  btn: {
    borderColor: "#F32F4D",
    borderWidth: 3,
    height: 100,
    width: 100,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
  itemsContainer: {},
});
