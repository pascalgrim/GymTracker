import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import SatzDataComponent from "./SatzDataComponent";
import { db } from "../firebase";
import { auth } from "../firebase"

export default function SaetzeList({ workoutID, uebungsId, showPrevStats=false}) {
  const renderItem = ({ item }) => (
    <SatzDataComponent
      Satz={item.Nummer}
      Wdh={item.Wiederholungen}
      Gewicht={item.Gewicht}
    />
  );

  const [loading, setLoading] = useState(true);
  const [sets, setSets] = useState([]);

  useEffect(() => {
    if (!showPrevStats){
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
    //Sätze nach Nummer sortieren
    return () => subscriber();
    }
    else{
     
    }
    
  }, []);

  
  return (
    <View>
      <FlatList
        data={sets}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
