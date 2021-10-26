import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MenuCard = ({ title, logo, offText, mainText, color, isBig = false }) => {
  function get_mainText_stylesheet(color) {
    return {
      color: color,
      fontSize: 27,
      paddingTop: 5,
    };
  }

  function get_card_size() {
    if (!isBig) {
      return {
        height: 140,
        width: 140,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#535D68",
        color: "red",
        padding: 12,
        margin: 10,
      };
    } else {
      return {
        height: 140,
        width: 300,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#535D68",
        color: "red",
        padding: 12,
        margin: 10,
      };
    }
  }
  return (
    <View style={get_card_size()}>
      <View style={styles.headerView}>
        <Text style={styles.header}>{title}</Text>
        <Image style={styles.logo} source={logo} />
      </View>
      <View>
        <Text style={styles.offText}>{offText}</Text>
      </View>
      <View>
        <Text style={get_mainText_stylesheet(color)}>{mainText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menucard: {
    height: 140,
    width: 140,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#535D68",
    color: "red",
    padding: 12,
    margin: 10,
  },
  headerView: {
    height: 50,
    alignContent: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  header: {
    fontSize: 18,
    color: "white",
  },
  logo: {
    height: 30,
    width: 30,
  },
  offText: {
    color: "#535D68",
  },
});

export default MenuCard;
