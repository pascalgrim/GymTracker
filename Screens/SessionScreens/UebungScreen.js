import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import MyText from "../../components/MyText";
import SatzDataComponent from "../../components/SatzDataComponent";
import { Colors } from "../../colors";
import { Button, Divider, IconButton, TextInput } from "react-native-paper";
import myTheme from "../../myTheme";
import NumericInput from "react-native-numeric-input";

import wdhIcon from "../../assets/imgs/wiederholung.png";
import gewichtIcon from "../../assets/imgs/gewicht.png";
import HashtagIcon from "../../assets/imgs/hashtag.png";
import wdhIconBlack from "../../assets/imgs/wiederholungBlack.png";
import gewichtIconBlack from "../../assets/imgs/gewichtBlack.png";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../../firebase";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function UebungScreen({ route }) {
  const navigation = useNavigation();
  const [wdh, setWdh] = useState(0);
  const [gewicht, setGewicht] = useState(0);
  const name = route.params.name;
  const art = route.params.art;
  const trainingsId = route.params.trainingsId;

  const [sets, setSets] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <View style={{ flex: 2 }}>
            <MyText bold text={name} fontSize={35} />
            <MyText text={art} color="grey" />
          </View>
          <Button onPress={() => navigation.goBack()}>
            <MyText text="back" />
          </Button>
        </View>
        <View
          style={{
            backgroundColor: Colors.offColor,
            borderRadius: 10,
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MyText text="Neuer Satz" bold />
            <IconButton icon="plus" theme={myTheme} color={Colors.green} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingTop: 30,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={wdhIcon}
                style={{ height: 30, width: 30, marginBottom: 10 }}
              />
              <NumericInput
                value={wdh}
                onChange={(wdh) => setWdh(wdh)}
                totalWidth={100}
                totalHeight={40}
                minValue={0}
                rounded
                textColor="white"
                iconStyle={{ color: "white" }}
                rightButtonBackgroundColor={Colors.blue}
                leftButtonBackgroundColor={Colors.blue}
                separatorWidth={0}
                borderColor="transparent"
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={gewichtIcon}
                style={{ height: 30, width: 30, marginBottom: 10 }}
              />
              <NumericInput
                value={gewicht}
                onChange={(gewicht) => setGewicht(gewicht)}
                totalWidth={100}
                totalHeight={40}
                rounded
                minValue={0}
                textColor="white"
                iconStyle={{ color: "white" }}
                rightButtonBackgroundColor={Colors.blue}
                leftButtonBackgroundColor={Colors.blue}
                separatorWidth={0}
                borderColor="transparent"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            height: 50,
            marginTop: 50,
          }}
        >
          <Image source={HashtagIcon} style={{ width: 20, height: 20 }} />
          <Image source={wdhIconBlack} style={{ width: 30, height: 30 }} />
          <Image source={gewichtIconBlack} style={{ width: 30, height: 30 }} />
        </View>
        <View>
          <SatzDataComponent Satz={1} Wdh={10} Gewicht={50} />
          <SatzDataComponent Satz={2} Wdh={10} Gewicht={50} />
          <SatzDataComponent Satz={3} Wdh={10} Gewicht={50} />
          <SatzDataComponent Satz={4} Wdh={10} Gewicht={50} />
        </View>
        <KeyboardAvoidingView>
          <IconButton
            color="black"
            icon="check"
            size={40}
            theme={myTheme}
            style={{
              backgroundColor: "lightgreen",
              position: "absolute",
              right: 0,
            }}
          />
        </KeyboardAvoidingView>
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
  mainContent: {
    flex: 1,
  },
  header: {
    height: 150,
    flexDirection: "row",
    alignItems: "center",
  },
  itemswrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 30,
  },
  timer: {},
  timerText: {
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    color: "white",
  },
});
