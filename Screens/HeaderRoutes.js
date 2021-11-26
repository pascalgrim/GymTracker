import React from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, Headline } from "react-native-paper";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function HeaderRoutes() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.greeting}>
        <Headline style={{ color: "white" }}>
          Hi {auth.currentUser.displayName} 🖐
        </Headline>
      </View>
      <IconButton
        icon="cog"
        color={"white"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
