import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Colors } from "../../colors";
import {
  Divider,
  Dialog,
  Paragraph,
  Button,
  IconButton,
} from "react-native-paper";
import SettingsItem from "./SettingsItem";
import myTheme from "../../myTheme";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { deleteUser } from "firebase/auth";
import { styles } from "../../styles";
import { StatusBar } from "expo-status-bar";
import MyText from "../../components/MyText";

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
    <SafeAreaView style={styles2.container}>
      <View style={styles2.mainContent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconButton
            icon="arrow-left"
            color="white"
            onPress={() => navigation.replace("HomeScreen")}
          />
          <View
            style={{
              alignSelf: "center",
              marginVertical: 50,
              justifyContent: "center",
              paddingLeft: 45,
            }}
          >
            <MyText text="Einstellungen" bold fontSize={25} />
          </View>
        </View>
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
      <StatusBar style="light" />
    </SafeAreaView>
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
