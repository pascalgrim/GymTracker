import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import FavIcon from "../../../components/FavIcon";
import {
  Modal,
  Portal,
  Button,
  Provider,
  IconButton,
} from "react-native-paper";
import MyText from "../../../components/MyText";
import SaetzeList from "../../../components/SaetzeList";
import { Colors } from "../../../colors";

export default function UebungEditScreen({ workout, uebung }) {
  const navigation = useNavigation();
  const [aufgeklappt, setAufgeklappt] = useState(false);

  // MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Provider>
      <View style={styles.container}>
        {/* HEADER */}
        <View
          style={{
            height: 100,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="chevron-left"
            color="white"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <MyText text="24:13 min" />
          <FavIcon />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginBottom: 30 }}>
            <MyText text="Montag, 13.12.2021" color="grey" />
          </View>
          <View style={{ marginBottom: 30 }}>
            <MyText text={"Bankdrücken"} fontSize={30} />
          </View>
        </View>
        {/* SÄTZE */}
        <View style={{}}>
          <SaetzeList
            trainingsId={workout.trainingsId}
            uebungsId={uebung.key}
          />
        </View>
        {/* LETZES WORKOUT SÄTZE */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <MyText text="Gewichte vom letzten Mal" />
            <IconButton
              icon={aufgeklappt ? "chevron-down" : "chevron-up"}
              color="white"
              onPress={() => setAufgeklappt(!aufgeklappt)}
            />
          </View>
          <View>
            {aufgeklappt ? (
              <SaetzeList
                trainingsId={workout.trainingsId}
                uebungsId={uebung.key}
                old
              />
            ) : null}
          </View>
        </View>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <MyText text="BEISPIEL TEXT" color="black" />
          </Modal>
        </Portal>
        <View
          style={{
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
          }}
        >
          <IconButton
            icon="plus"
            color="black"
            size={40}
            style={{ backgroundColor: Colors.blue, alignSelf: "center" }}
            onPress={showModal}
          />
        </View>
      </View>
    </Provider>
  );
}
