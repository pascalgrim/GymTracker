import React, { useEffect } from "react";
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
import { getDay, getMonth } from "../../DateConverter";
import { DBM } from "../../DatabaseManager";

export default function WorkoutScreen({ route }) {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  var workout = route.params.workout;
  const datum = workout.erstelltAm;

  const headerItemAlign = route.params.editable ? "flex-end" : "flex-start";
  const headerIcon = route.params.editable ? "check" : "arrow-left";
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: headerItemAlign,
          paddingTop: 20,
        }}
      >
        <IconButton
          icon={headerIcon}
          color="white"
          size={30}
          onPress={() => navigation.replace("HomeScreen")}
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
            <MyText text={getMonth(datum)} fontSize={28} />
            <MyText text={getDay(datum)} bold fontSize={28} />
          </View>
        </View>
      </View>
      {/* LOWER CONTAINER */}
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              color: "white",
              fontSize: 12,
              fontFamily: "Poppins_700Bold",
            },
            tabBarStyle: { backgroundColor: Colors.bg },
          }}
        >
          <Tab.Screen
            name="Überblick"
            children={() => <WorkoutUeberblick workout={workout} />}
          />
          <Tab.Screen
            name="Übungen"
            children={() => (
              <WorkoutUebungen
                workout={workout}
                editable={route.params.editable}
              />
            )}
          />
          <Tab.Screen
            name="Infos"
            children={() => (
              <WorkoutInfos
                workout={workout}
                editable={route.params.editable}
              />
            )}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}
