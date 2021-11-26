import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import myTheme from "../../../myTheme";
import myStyle from "../../../mystyle";

export default function inputFieldEdit({ title, value, setValue }) {
  const [disabled, setDisabled] = useState(true);

  const handlePress = () => {
    setDisabled(!disabled);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <TextInput
          theme={myTheme}
          label={title}
          mode="outlined"
          value={value}
          style={myStyle.textInput}
          onChangeText={(value) => setValue(value)}
          disabled={disabled}
        />
      </View>
      <View style={{ flex: 1 }}>
        <IconButton icon="pencil" color="white" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
