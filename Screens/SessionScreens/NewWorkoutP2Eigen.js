import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import HeaderNewWorkout from "../../components/HeaderNewWorkout";
import MyText from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";
import WeiterButton from "../../components/WeiterButton";
import { Colors } from "../../colors";
import myTheme from "../../myTheme";

// IMAGES

import PushImage from "../../assets/imgs/push.png";
import PullImage from "../../assets/imgs/pull.png";
import LegsImage from "../../assets/imgs/legs.png";
import CardioImage from "../../assets/imgs/cardio.png";
import { TextInput } from "react-native-paper";

export default function NewWorkoutP2Eigen() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const [info, setInfo] = useState("");
  const workouts = [
    {
      id: "push",
      title: "Push",
      img: PushImage,
    },
    {
      id: "pull",
      title: "Pull",
      img: PullImage,
    },
    {
      id: "legs",
      title: "Legs",
      img: LegsImage,
    },
    {
      id: "cardio",
      title: "Cardio",
      img: CardioImage,
    },
  ];
  const renderItem = ({ item }) => (
    <WorkoutSelection
      img={item.img}
      text={item.title}
      selected={selected}
      setSelected={setSelected}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <HeaderNewWorkout helperText="Neues Workout einrichten" />
      <View
        style={{
          marginTop: 50,
          marginBottom: 20,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MyText text={"Welches Workout?"} fontSize={18} />
          </View>
          <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>

        <WeiterButton
          disabled={selected === null}
          onPress={() =>
            navigation.navigate("WorkoutScreen", { name: selected })
          }
        />
      </View>
    </SafeAreaView>
  );
}

const WorkoutSelection = ({ img, text, selected, setSelected }) => {
  const backgroundColor =
    selected === text ? Colors.selectionColor : "transparent";

  const handlePress = () => {
    selected === text ? setSelected(null) : setSelected(text);
  };
  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: 80,
        margin: 10,
        backgroundColor: backgroundColor,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handlePress}
    >
      <Image source={img} style={{ height: 50, width: 50 }} />
      <MyText text={text} />
    </TouchableOpacity>
  );
};
