import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import HeaderNewWorkout from "../../components/HeaderNewWorkout";
import MyText from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";

export default function newWorkoutP1() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNewWorkout helperText="Option auswählen..." />
      <TouchableOpacity onPress={() => navigation.navigate("NewWorkoutP2")}>
        <Button icon="folder" text="Vorhandenes Workout auswählen" />
      </TouchableOpacity>
      <MyText text="oder..." color="grey" centered />
      <TouchableOpacity
        onPress={() => navigation.navigate("NewWorkoutP2Eigen")}
      >
        <Button icon="folder-multiple-plus" text="Neues Workout erstellen" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Button = ({ icon, text }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 30,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
      }}
    >
      <IconButton icon={icon} size={50} color="white" />
      <MyText text={text} light />
    </View>
  );
};
