import React from "react";
import { View, Text, TextInput } from "react-native";
import { IconButton } from "react-native-paper";
import MyText from "./MyText";

export default function MyNumericInput({ title, value, setValue }) {
  const btnStyle = {
    backgroundColor: "white",
  };
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View>
        <MyText text={title} color="black" bold />
      </View>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon="minus"
          style={btnStyle}
          onPress={() => {
            if (value > 0) {
              setValue((prev) => prev - 1);
            }
          }}
        />
        <TextInput
          keyboardType="numeric"
          style={{
            width: 70,
            borderBottomWidth: 1,
            borderBottomColor: "white",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          onChangeText={(value) => setValue(value)}
          value={value.toString()}
        />
        <IconButton
          icon="plus"
          style={btnStyle}
          onPress={() => setValue((prev) => prev + 1)}
        />
      </View>
    </View>
  );
}
