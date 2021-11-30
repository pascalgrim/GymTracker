import React, { useState } from "react";
import { View } from "react-native";
import { Snackbar } from "react-native-paper";

export default function MySnackBar({ text, setIsVisible, isVisible }) {
  const onToggleSnackBar = () => setIsVisible(!isVisible);

  const onDismissSnackBar = () => setIsVisible(false);

  return (
    <Snackbar
      visible={isVisible}
      onDismiss={onDismissSnackBar}
      action={{
        label: "Ok",
        onPress: () => {
          setIsVisible(false);
        },
      }}
    >
      {text}
    </Snackbar>
  );
}
