import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import MyText from "./MyText";

export default function IconButtonStat({
  iconText,
  color,
  bgColor,
  upperText,
  einheit = "",
  underText,
}) {
  return (
    <View
      style={{
        height: 110,
        alignItems: "center",
        justifyContent: "space-around",

        flex: 1,
        marginHorizontal: 20,
      }}
    >
      <IconButton
        icon={iconText}
        color={color}
        size={25}
        style={{ backgroundColor: bgColor }}
      />
      <View style={{ alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <MyText text={upperText} />
          <MyText text={" " + einheit} />
        </View>
        <MyText text={underText} color="grey" />
      </View>
    </View>
  );
}
