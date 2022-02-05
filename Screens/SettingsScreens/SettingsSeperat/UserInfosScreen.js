import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Alert } from "react-native";
import InputFieldEdit from "./inputFieldEdit";
import { auth } from "../../../firebase";
import { updateProfile, updateEmail, updatePassword } from "@firebase/auth";
import { useNavigation } from "@react-navigation/native";
import MySnackBar from "../../../components/MySnackBar";
import MyText from "../../../components/MyText";
import { Colors } from "../../../colors";
import { IconButton } from "react-native-paper";



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
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bg }}>
      <View
        style={{
          alignSelf: "center",
          height:300,
          justifyContent: "center",
        }}
      >
        <IconButton icon="account" color="white" style={{alignSelf:"center"}} size={30}/>
        <MyText text="Konto" bold fontSize={25} />
      </View>
      <View style={styles.mainContent}>
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
        
      </View>
      <MySnackBar
        text={popUpText}
        isVisible={visible}
        setIsVisible={setVisible}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({mainContent:{
  flex: 1,
    backgroundColor: Colors.bg,
    padding: 20,
}});
