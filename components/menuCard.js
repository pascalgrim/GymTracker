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
        height: 130,
        width: 130,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#535D68",
        color: "red",
        padding: 12,
      
      };
    } else {
      return {
        height: 130,
        width: 280,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#535D68",
        color: "red",
        padding: 12,
       
      };
    }
  }
  return (
    <View style={get_card_size()}>
      <View style={styles.topSection}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.midSection}>
        <Text style={styles.offText}>{offText}</Text>
      </View>
      <View style={styles.bottomSection}>
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
  topSection: {
    flex:2,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
  },
  logo: {
    height: 20,
    width: 20,
  },
  midSection:{
    flex:1,

  },
  offText: {
    color: "#535D68",
  },
  bottomSection:{
    flex:2,
    justifyContent:"center",
   
  }
});

export default MenuCard;
