import React from "react";
import { View } from "react-native";
import { styles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import FavIcon from "../../../components/FavIcon";
import { IconButton } from "react-native-paper";
import MyText from "../../../components/MyText";
import SaetzeList from "../../../components/SaetzeList";

export default function UebungNoEditScreen({ workout, uebung }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={{
          height: 100,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="chevron-left"
          color="white"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <FavIcon />
      </View>
      {/* INFOS */}
      <View style={{ alignItems: "center" }}>
        <View style={{ marginBottom: 30 }}>
          <MyText
            text={workout.erstelltAm.toDate().toDateString()} //TODO: Datum vom WorkoutDAY nicht vom workout
            color="grey"
          />
        </View>
        <View style={{ marginBottom: 30 }}>
          <MyText text={uebung.name} fontSize={30} />
        </View>

        {/* UP DOWN STATS */}
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton icon="arrow-down" color="#FF0000" size={50} />
            <MyText text="-0.5%" fontSize={23} />
          </View>
          <MyText
            text="Du hast 0.5% weniger Volumen gemacht als davor."
            fontSize={12}
            color="grey"
          />
        </View>
      </View>
      {/* SÄTZE */}
      <View style={{ marginTop: 40 }}>
        <SaetzeList workoutID={workout.workoutID} uebungsId={uebung.key} />
      </View>
    </View>
  );
}
