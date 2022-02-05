import React, { useState,useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  View
} from "react-native";
import MyText from "../components/MyText";
import WorkoutItem from "../components/WorkoutItem";
import WorkoutListe from "../components/WorkoutListe";
import { db,auth } from "../firebase";

import { styles } from "../styles";

export default function allWorkoutsScreen() {
    const renderItem = ({ item }) => (
        <WorkoutItem item={item} editable={false} />
      );
      const [loading, setLoading] = useState(true);
      const [workouts, setWorkouts] = useState([]);
      useEffect(() => {
        const subscriber = db
          .collection("Benutzer")
          .doc(auth.currentUser.uid)
          .collection("Workouts")
          .orderBy("erstelltAm", "desc")
          .limit(50)
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
    <SafeAreaView style={styles.container}>
        <View style={{justifyContent:"center",alignItems:"center",marginVertical:50}}>
            <MyText text="Deine Workouts" bold fontSize={25}/>  
        </View>
        
        <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.workoutID}
      />
    </SafeAreaView>
  );
}

