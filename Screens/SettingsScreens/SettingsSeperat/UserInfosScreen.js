import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import myStyle from "../../../mystyle";
import InputFieldEdit from "./inputFieldEdit";
import Header from "../Header";
import { auth } from "../../../firebase";
import { Snackbar } from "react-native-paper";
import { updateProfile, updateEmail, updatePassword } from "@firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

//TODO: Variable in Temp Variable speichern, damit die Snackbar nur kommt, wenn man auch was ändert.

export default function UserInfosScreen() {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const [username, setUsername] = useState(auth.currentUser.displayName);
  const [mail, setMail] = useState(auth.currentUser.email);
  const [password, setPassword] = useState();

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  // CHANGE USERNAME
  const changeUsername = () => {
    updateProfile(user, {
      displayName: username,
    })
      .then(() => {
        console.log("Username got updated to " + username);
        setVisible(true);
      })
      .catch((error) => {
        console.log("Fehler beim Updaten des Usernames");
      });
  };

  // CHANGE EMAIL
  const changeEmail = () => {
    updateEmail(user, mail)
      .then(() => {
        console.log("Email got updated to " + mail);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            Alert.alert("Diese Email wird schon verwendet.");
            break;
          case "auth/invalid-email":
            Alert.alert("Bitte geben Sie eine gültige E-Mail ein.");
            break;
          default:
            Alert.alert(error.code);
            break;
        }
      });
  };

  // CHANGE Password
  const changePassword = () => {
    updatePassword(user, password)
      .then(() => {
        console.log("Password got updated to " + password);
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Kontoinformationen" />
      <View style={myStyle.mainContent}>
        <InputFieldEdit
          title="Benutzername"
          value={username}
          setValue={setUsername}
          onPressFunction={changeUsername}
        />
        <InputFieldEdit
          title="E-Mail"
          value={mail}
          setValue={setMail}
          onPressFunction={changeEmail}
        />
        <InputFieldEdit
          title="Neues Passwort"
          value={password}
          setValue={setPassword}
          onPressFunction={changePassword}
          secure
        />
      </View>

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Wert wurde geändert!
      </Snackbar>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
