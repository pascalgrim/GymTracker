import React from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "../../../colors";
import InfoIcon from "../../../assets/imgs/info.png";
import CommentIcon from "../../../assets/imgs/comment.png";

import MyText from "../../../components/MyText";

export default function WorkoutInfos() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.bg,
        paddingLeft: 30,
        paddingTop: 20,
      }}
    >
      <InfoItem
        logo={InfoIcon}
        text="In dem Workout möchte ich mehr Fokus auf die obere Brust legen. Somit soll die erste Übung eine schwere Schrägbankübunge sein."
      />
      <InfoItem
        logo={CommentIcon}
        text="An dem Tag hat sich meine Schulter nicht so gut angefühlt, somit habe ich das Schultertraining ausgelassen"
      />
    </View>
  );
}

const InfoItem = ({ logo, text }) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 20 }}>
      <View style={{ flex: 1 }}>
        <Image source={logo} style={{ width: 50, height: 50 }} />
      </View>

      <View style={{ flex: 3 }}>
        <MyText text={text} />
      </View>
    </View>
  );
};
