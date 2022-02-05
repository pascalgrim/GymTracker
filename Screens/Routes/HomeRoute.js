import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,  SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import MyText from "../../components/MyText";
import { IconButton } from "react-native-paper";
import TripleStats from "../../components/TripleStats";
import WorkoutListe from "../../components/WorkoutListe";
import { styles } from "../../styles";
import { auth } from "../../firebase";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* MAIN CONTENT */}
      <View style={{ flex: 1 }}>
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
        <View>
          <View style={{ marginTop: 20 }}>
            <MyText text={"Deine letzten Workouts"} fontSize={18} />
          </View>
          <WorkoutListe editable={false} />
        </View>
        <IconButton
          icon="plus"
          color="black"
          size={40}
          style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("NewWorkoutP2Eigen")}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

// HEADER
const Header = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.navigate("Settings");
  };
  const username = auth.currentUser.displayName;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 130,
      }}
    >
      <MyText text={`Hi ${username === null? "":username}`} fontSize={25} />
      <IconButton
        icon="menu"
        color="white"
        size={45}
        // onPress={() => auth.signOut().then(() => navigation.navigate("Start"))}
        onPress={handleMenuPress}
      />
    </View>
  );
};
