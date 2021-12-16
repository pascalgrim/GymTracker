import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import { Divider, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";
import MyText from "../../components/MyText";

import WorkoutUeberblick from "./WorkoutScreenComponents/WorkoutUeberblick";
import WorkoutUebungen from "./WorkoutScreenComponents/WorkoutUebungen";
import WorkoutInfos from "./WorkoutScreenComponents/WorkoutInfos";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../../colors";

export default function WorkoutScreen({ route }) {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  const workout = route.params.item;
  console.log(workout);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 100, justifyContent: "center" }}>
        <IconButton
          icon="chevron-left"
          color="white"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      {/* MAIN CONTENT */}
      <View>
        {/* UPPER CONTAINER */}
        <View
          style={{
            height: 180,
            flexDirection: "row",
            paddingVertical: 40,
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <View style={{ flex: 3 }}>
            <MyText text={workout.titel} fontSize={30} />
            <MyText text="Workout" light color="grey" fontSize={30} />
          </View>
          <View
            style={{ width: 1, backgroundColor: "white", height: "100%" }}
          ></View>
          {/* RIGHT SIDE */}
          <View style={{ flex: 1, alignItems: "center", paddingLeft: 30 }}>
            <MyText text="DEZ" fontSize={28} />
            <MyText text="21" bold fontSize={28} />
          </View>
        </View>
      </View>
      {/* LOWER CONTAINER */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              color: "white",
              fontSize: 14,
              fontFamily: "Poppins_400Regular",
            },
            tabBarStyle: { backgroundColor: Colors.bg },
          }}
        >
          <Tab.Screen name="Überblick" component={WorkoutUeberblick} />
          <Tab.Screen
            name="Übungen"
            children={() => <WorkoutUebungen workout={workout} />}
          />
          <Tab.Screen name="Infos" component={WorkoutInfos} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}
