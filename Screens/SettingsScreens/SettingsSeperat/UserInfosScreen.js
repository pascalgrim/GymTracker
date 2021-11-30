import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import myStyle from "../../../mystyle";
import InputFieldEdit from "./inputFieldEdit";
import Header from "../Header";
import { auth } from "../../../firebase";
import { Button, Snackbar } from "react-native-paper";
import { updateProfile, updateEmail, updatePassword } from "@firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MySnackBar from "../../../components/MySnackBar";

//TODO: Variable in Temp Variable speichern, damit die Snackbar nur kommt, wenn man auch was ändert.

export default function UserInfosScreen() {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const [username, setUsername] = useState(auth.currentUser.displayName);
  const [mail, setMail] = useState(auth.currentUser.email);
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(false);
  const [popUpText, setPopUpText] = useState("Änderungen erfolgreich");
  async function popUpSnackbar() {
    setVisible(true);
    await timeout(3000);
    setVisible(false);
  }
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  // CHANGE USERNAME
  const changeUsername = () => {
    if (username !== user.displayName) {
      updateProfile(user, {
        displayName: username,
      })
        .then(() => {
          console.log("Username got updated to " + username);
          setPopUpText("Name wurde erfolgreich zu " + username + " geändert!");
          popUpSnackbar();
        })
        .catch((error) => {
          console.log("Fehler beim Updaten des Usernames");
        });
    }
  };

  // CHANGE EMAIL
  const changeEmail = () => {
    if (mail !== user.email) {
      updateEmail(user, mail)
        .then(() => {
          console.log("Email got updated to " + mail);
          setPopUpText("Email wurde erfolgreich zu " + mail + " geändert!");
          popUpSnackbar();
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
    }
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
      <MySnackBar
        text={popUpText}
        isVisible={visible}
        setIsVisible={setVisible}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
