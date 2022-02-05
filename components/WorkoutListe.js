import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import WorkoutItem from "./WorkoutItem";
import { db } from "../firebase";
import { auth } from "../firebase";


export default function WorkoutListe({ editable }) {
  const renderItem = ({ item }) => (
    <WorkoutItem item={item} editable={editable} />
  );
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const subscriber = db
      .collection("Benutzer")
      .doc(auth.currentUser.uid)
      .collection("Workouts")
      .orderBy("erstelltAm", "desc")
      .limit(3)
      .onSnapshot((querySnapshot) => {
        const workouts = [];
        querySnapshot.forEach((documentSnapshot) => {
          workouts.push({
            ...documentSnapshot.data(),
            workoutID: documentSnapshot.id,
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
        keyExtractor={(item) => item.workoutID}
      />
    </View>
  );
}
