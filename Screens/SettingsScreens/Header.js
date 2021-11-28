import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../colors";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import MyText from "../../components/MyText";

export default function Header({ title, dashboard = false }) {
  const navigation = useNavigation();
  const handlePress = () => {
    dashboard ? navigation.replace("Dashboard") : navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <IconButton icon="arrow-left" color={Colors.red} onPress={handlePress} />
      <View style={styles.headingContainer}>
        <MyText text={title} color="black" fontSize={18} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 40,
    paddingLeft: 20,
  },
  headingContainer: {
    padding: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
