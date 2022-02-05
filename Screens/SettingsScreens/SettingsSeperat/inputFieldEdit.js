import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import myTheme from "../../../myTheme";


export default function inputFieldEdit({
  title,
  value,
  setValue,
  onPressFunction,
  secure = false,
}) {
  const [disabled, setDisabled] = useState(true);
  const handlePress = () => {
    setDisabled(!disabled);
    if (!disabled) {
      {
        onPressFunction();
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <TextInput
          theme={myTheme}
          label={title}
          mode="outlined"
          value={value}
          style={styles.textInput}
          onChangeText={(value) => setValue(value)}
          disabled={disabled}
          secureTextEntry={secure}
        />
      </View>
      <View style={{ flex: 1 }}>
        <IconButton
          icon={disabled ? "pencil" : "check-bold"}
          color="white"
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput:{
    marginTop: 10,
    marginBottom: 10,
  }
});
