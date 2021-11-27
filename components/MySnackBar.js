import React, { useState } from "react";
import { View } from "react-native";
import { Snackbar } from "react-native-paper";

export default function MySnackBar({ text, isVisible }) {
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar visible={isVisible} onDismiss={onDismissSnackBar}>
      {text}
    </Snackbar>
  );
}
