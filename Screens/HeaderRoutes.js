import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { IconButton, Headline } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import logoRed from "../assets/imgs/logo_red.png";

export default function HeaderRoutes() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image source={logoRed} style={styles.logo} />
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
  logo: {
    height: 45,
    width: 45,
  },
});
