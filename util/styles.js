import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131321",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingHorizontal: 25,
  },
});
