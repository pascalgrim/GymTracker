import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  SafeAreaView,
} from "react-native";
import { auth } from "../../firebase";
import WorkoutItem from "../../components/WorkoutItem";
import { Colors } from "../../colors";
import MyProgressChart from "../../components/MyProgressChart";
import { StatusBar } from "expo-status-bar";

import myTheme from "../../myTheme";
import HeaderRoutes from "../HeaderRoutes";
import doubleArrow from "../../assets/imgs/doublearrow.png";
import MyText from "../../components/MyText";
import SingleUbung from "../SessionScreens/SingleUbung";
import { db } from "../../firebase";

import ActionButton from "react-native-circular-action-menu";

import Icon from "react-native-vector-icons/Ionicons";
import { IconButton } from "react-native-paper";
import TripleStats from "../../components/TripleStats";
import WorkoutListe from "../../components/WorkoutListe";


export default function Home() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* MAIN CONTENT */}
      <View>
        {/* Diese Woche Container */}
        <View>
          <MyText text="Diese Woche" fontSize={20} centered />
          <MyText
            text="Das hast du diese Woche schon geschafft!"
            color="grey"
            fontSize={12}
            centered
          />
          <TripleStats />
        </View>
        {/* Deine letzten Workouts Container */}
        <View style={{marginTop:20,}}>  
        <MyText text={"Deine letzten Workouts"} fontSize={18} />
        </View>
        <WorkoutListe/>
        <IconButton icon="plus" color="black" size={40} style={{backgroundColor:"white",alignSelf:"center"}} onPress={() =>navigation.navigate("NewWorkoutP1")}/>
      </View>
      {/* <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="New Task"
          onPress={() => console.log("notes tapped!")}
        >
          <Icon name="android-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Notifications"
          onPress={() => {}}
        >
          <Icon
            name="android-notifications-none"
            style={styles.actionButtonIcon}
          />
        </ActionButton.Item>
      </ActionButton> */}
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131321",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingHorizontal: 25,
  },
});

// HEADER
const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 130,
      }}
    >
      <MyText text={`Hi ${auth.currentUser.displayName}`} fontSize={25} />
      <IconButton icon="menu" color="white" size={45} />
    </View>
  );
};
