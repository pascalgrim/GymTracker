import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import SatzDataComponent from "./SatzDataComponent";
import { db } from "../firebase";
import { auth } from "../firebase";
import { Colors } from "../colors";

export default function SaetzeList({
  workoutID,
  uebungsId,
  showPrevious = false,
  prevSets = null,
}) {
  const [showDelete,setShowDelete] = useState(false)
  const renderItem = ({ item }) => (
    <SatzDataComponent
      workoutID={workoutID}
      uebungsID = {uebungsId}
      Satz={item.Nummer}
      Wdh={item.Wiederholungen}
      Gewicht={item.Gewicht}
      satzID={item.key}
      showPrevious={showPrevious}
      showDelete={showDelete}
      setShowDelete={setShowDelete}
    />
  );
  const [loading, setLoading] = useState(true);
  const [sets, setSets] = useState([]);

  useEffect(() => {
    if (!showPrevious) {
      const subscriber = db
        .collection("Benutzer")
        .doc(auth.currentUser.uid)
        .collection("Workouts")
        .doc(workoutID)
        .collection("Uebungen")
        .doc(uebungsId)
        .collection("Sätze")
        .orderBy("Nummer")
        .onSnapshot((querySnapshot) => {
          const sets = [];
          querySnapshot.forEach((documentSnapshot) => {
            sets.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
          setSets(sets);
          setLoading(false);
        });

      return () => subscriber();
    } else {
      setSets(prevSets);
      setLoading(false);
    }
  }, []);

  return (
    <FlatList
      data={sets}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      style={{
        borderLeftColor: showPrevious ? "white" : "",
        borderLeftWidth: showPrevious ? 1 : 0,
        paddingRight: showPrevious ? 0 : 20,
      }}
    />
  );
}
