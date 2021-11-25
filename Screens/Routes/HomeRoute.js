import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Headline, IconButton } from "react-native-paper";
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Headline style={{ color: "white" }}>Guten Tag</Headline>
          <Headline style={{ color: "white" }}>
            {auth.currentUser.displayName}
          </Headline>
        </View>
        <IconButton icon="cog" color={Colors.red} />
      </View>
      <MyProgressChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
