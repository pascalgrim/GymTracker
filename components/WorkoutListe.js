import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import MyText from "./MyText";
import WorkoutItem from "./WorkoutItem";
import { db } from "../firebase";
import { auth } from "../firebase";
import { Colors } from "../colors";
export default function WorkoutListe() {
  const renderItem = ({ item }) => <WorkoutItem item={item} />;
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const subscriber = db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Trainingseinheiten")
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
