import React from "react";
import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
import logo from "../../assets/imgs/logo_red.png";
import googleLogo from "../../assets/imgs/google.png";
import mailLogo from "../../assets/imgs/email.png";
import fbLogo from "../../assets/imgs/facebook.png";
import twLogo from "../../assets/imgs/twitter.png";
import MyText from "../../components/MyText";
import { Divider } from "react-native-paper";
import myTheme from "../../myTheme";
import {auth} from "../../firebase";
import { Colors } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


export default function SignUpChooseScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={{ height: 100, width: 100 }} />
        <MyText text="GYM TRACKER" fontSize={20} />
      </View>
      <View style={styles.signupContainer}>
        <View style={{ alignItems: "center" }}>
          <MyText text="Jetzt anmelden" bold fontSize={23} />
        </View>

        <TouchableOpacity
          onPress={() =>console.log("pressed google")}
          style={styles.bigButton}
        >
          <Image source={googleLogo} style={{ height: 30, width: 30 }} />
          <View style={{ paddingLeft: 20 }}>
            <MyText text={"Einloggen mit Google"} color="black" fontSize={18} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={styles.bigButton}
        >
          <Image source={mailLogo} style={{ height: 30, width: 30 }} />
          <View style={{ paddingLeft: 20 }}>
            <MyText text={"Email & Passwort"} color="black" fontSize={18} />
          </View>
        </TouchableOpacity>
        <Divider theme={myTheme} style={{ marginTop: 20, marginBottom: 20 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={fbLogo}
            style={{ height: 40, width: 40, marginRight: 20 }}
          />
          <Image
            source={twLogo}
            style={{ height: 40, width: 40, marginLeft: 20 }}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <MyText text="Du hast schon einen Account?" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bg,
  },
  bigButton: {
    backgroundColor: "white",
    height: 60,
    borderRadius: 20,
    paddingLeft: 40,
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  logoContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signupContainer: {
    flex: 5,
  },
  bottom: {
    flex: 1,
    alignItems:"center"
  },
});
