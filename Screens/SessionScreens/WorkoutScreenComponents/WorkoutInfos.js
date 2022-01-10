import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../../colors";
import InfoIcon from "../../../assets/imgs/info.png";
import CommentIcon from "../../../assets/imgs/comment.png";

import MyText from "../../../components/MyText";
import { useState } from "react";
import { useEffect } from "react";
import myTheme from "../../../myTheme";
import {
  IconButton,
  Modal,
  Portal,
  Provider,
  TextInput,
} from "react-native-paper";
import { DBM } from "../../../DatabaseManager";

export default function WorkoutInfos({ workout, editable }) {
  const [note, setNote] = useState(workout.Notizen);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {
    backgroundColor: Colors.offColor,
    padding: 20,
    position: "absolute",
    top: 20,
    width: "100%",
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <MyText text="Notizen eingeben:" bold />
          <TextInput
            theme={myTheme}
            value={note}
            onChangeText={(note) => setNote(note)}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() =>
              DBM.updateNotizen(workout.workoutID, note.trim()).then(() =>
                hideModal()
              )
            }
          >
            <MyText text="Speichern" bold />
          </TouchableOpacity>
        </Modal>
      </Portal>

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.bg,
          paddingLeft: 30,
          paddingTop: 20,
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={InfoIcon}
                style={{ width: 25, height: 25, marginRight: 20 }}
              />
              <MyText text="Deine Notizen" bold fontSize={18} />
            </View>
            {editable ? (
              <IconButton icon="pencil" color="white" onPress={showModal} />
            ) : null}
          </View>
          <View>
            <MyText
              text={note === "" ? "Noch keine Notizen vorhanden" : note.trim()}
              color="grey"
            />
          </View>
        </View>
      </View>
    </Provider>
  );
}
