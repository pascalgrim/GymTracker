import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";
import { Colors } from "../../colors";
import { Divider, Dialog, Paragraph, Button } from "react-native-paper";
import SettingsItem from "./SettingsItem";
import myTheme from "../../myTheme";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { deleteUser } from "firebase/auth";
import { styles } from "../../styles";

export default function SettingsScreen() {
  const navigation = useNavigation();
  const handle_logout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Start");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const hideDialog = () => setVisible(false);
  const [showDialog, setShowDialog] = useState(false);

  const handle_delete = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        console.log("User wurde erfolgreich gelöscht");
        navigation.replace("Start");
      })
      .catch((err) => Alert.alert(err.message));
  };
  return (
    <View style={styles.container}>
      <Header title="Einstellungen" />
      <View style={styles2.mainContent}>
        <Text style={styles2.subtitle}>Konto</Text>
        <Divider theme={myTheme} />
        <SettingsItem
          text="Kontoinformationen"
          description="Kontoinformationen ansehen und bearbeiten"
          navScreen="UserInfoScreen"
        />
        <SettingsItem
          text="Ausloggen"
          description="Logge dich aus dem Account aus"
          onPressFunction={handle_logout}
        />
        <SettingsItem
          text="Konto löschen"
          description="Lösche deinen Account entgültig"
          color="red"
          onPressFunction={() => setShowDialog(true)}
        />
      </View>
      <Dialog visible={showDialog} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>
            Bist du dir sicher, dass du deinen Account endgültig löschen
            möchtest? Du kannst dies nicht mehr rückgängig machen.
          </Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setShowDialog(false)}>Zurück</Button>
          <Button theme={myTheme} onPress={handle_delete} mode="contained">
            Löschen
          </Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  text: {
    color: "white",
  },
  description: {
    color: "grey",
  },
});
