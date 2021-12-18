import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import MyText from "./MyText";
import WorkoutItem from "./WorkoutItem";
import { db } from "../firebase";
import { auth } from "../firebase";
import { Colors } from "../colors";

export default function WorkoutListe({editable}) {
  const renderItem = ({ item }) => <WorkoutItem item={item} editable={editable}/>;
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    // Das gibt nur die letzten 3 Workouts zurück, nicht die letzten 3 workout days
    const subscriber = db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Workouts")
      .orderBy("zuletztGemachtAm","desc")
      .limit(3)
      .onSnapshot((querySnapshot) => {
        const workouts = [];
        querySnapshot.forEach((documentSnapshot) => {
          workouts.push({
            ...documentSnapshot.data(),
            trainingsId: documentSnapshot.id,
          });
        });

        setWorkouts(workouts);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.trainingsId}
      />
    </View>
  );
}
