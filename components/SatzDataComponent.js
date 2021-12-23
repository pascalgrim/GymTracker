import React from "react";
import { TouchableOpacity, View } from "react-native";
import MyText from "./MyText";

export default function SatzDataComponent({ Satz, Wdh, prevWdh = null, Gewicht, prevGewicht = null }) {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: 60,

        marginVertical: 5,
      }}
    
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 5,
        }}
      >
        <MyText text={Satz} color="black" fontSize={17} />
      </View>

      <View style={{ paddingTop: 5 }}>
        <MyText text={`${Wdh} Wiederholungen`} color={"white"} />
        <MyText text={`${Wdh} Wiederholungen`} color={"grey"} />
      </View>
      <View style={{ paddingTop: 5 }}>
        <MyText text={`${Gewicht} Kg`} color={"white"} />
        <MyText text={`${Gewicht} Kg`} color={"grey"} />
      </View>
    </TouchableOpacity>
  );
}
