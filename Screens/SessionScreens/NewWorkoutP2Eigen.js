import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,ScrollView
} from "react-native";
import { TextInput } from "react-native-paper";
import HeaderNewWorkout from "../../components/HeaderNewWorkout";
import MyText from "../../components/MyText";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles";
import WeiterButton from "../../components/WeiterButton";
import { Colors } from "../../colors";
import myTheme from "../../myTheme";


// IMAGES

import PushImage from "../../assets/imgs/push.png";
import PullImage from "../../assets/imgs/pull.png";
import LegsImage from "../../assets/imgs/legs.png";
import CardioImage from "../../assets/imgs/cardio.png";
import { DBM } from "../../DatabaseManager";
import { db } from "../../firebase";
import { getDoc } from "firebase/firestore";


export default function NewWorkoutP2Eigen() {
  const navigation = useNavigation();
  const [selectionID, setselectionID] = useState(null);
  const [selectedItem,setSelectedItem] = useState(null);
  const [info, setInfo] = useState("");
  const workouts = [
    {
      id: "push",
      title: "Push",
      img: PushImage,
    },
    {
      id: "pull",
      title: "Pull",
      img: PullImage,
    },
    {
      id: "legs",
      title: "Legs",
      img: LegsImage,
    },
    {
      id: "cardio",
      title: "Cardio",
      img: CardioImage,
    },
  ];
  const renderItem = ({ item }) => (
    <WorkoutSelection
      img={item.img}
      text={item.title}
      selectionID={selectionID}
      setselectionID={setselectionID}
      selectedItem = {selectedItem}
      setSelectedItem = {setSelectedItem}
    />
  );
  async function erstelleTraining() {
    const allWorkouts = await DBM.getAllWorkoutsIDs();
    var exists = false;
    allWorkouts.forEach((id) => {
      if (id === selectionID) {
        exists = true;
      }
    });
    if (!exists) {
      DBM.createWorkout(selectionID)
        .then( () =>{
          DBM.createWorkoutDay(selectionID).then(function(docRef){
            DBM.getWorkoutDaySnap(selectionID,docRef.id).then(getDoc(docRef)).then(function(res){
              navigation.navigate("WorkoutScreen",{item:res.data(),editable:true})
            })
          })
        })
        
    }else{
      DBM.createWorkoutDay(selectionID).then(function(docRef){
        DBM.getWorkoutDaySnap(selectionID,docRef.id)
      })
    }
  }
  return (
    
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex:1}} behavior="height">
        <ScrollView>
      <HeaderNewWorkout helperText="Neues Workout einrichten" />
      <View
        style={{
          marginTop: 50,
          marginBottom: 20,
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        
        
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MyText text={"Welches Workout?"} fontSize={18} />
          </View>
          <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <View>
        <TextInput
          theme={myTheme}
          label="Name"
          mode="outlined"
          value={selectionID}
          style={{marginTop: 10,
            marginBottom: 30,}}
          onChangeText={(selectionID) => setselectionID(selectionID)}
        />
        </View>
        </View>
        </ScrollView>
        <WeiterButton disabled={selectionID === null} onPress={erstelleTraining} />
        </KeyboardAvoidingView>
        
      
    </SafeAreaView>
  );
}

const WorkoutSelection = ({ img, text, selectionID, setselectionID,selectedItem,setSelectedItem }) => {
  
  async function generateSelection(workoutName) {
    const allWorkouts = await DBM.getAllWorkoutsIDs();
    var counter=0
    allWorkouts.forEach((id) => {
      if (id === workoutName) {
        counter++
      }
    });
    setselectionID(workoutName+" "+ counter)
  }
  const backgroundColor =
    selectedItem === text ? Colors.selectionColor : "transparent";

  const handlePress = () => {

    if(selectedItem === text){
      setSelectedItem(null)
      setselectionID(null)
    }else{
      setSelectedItem(text)
      generateSelection(text)
    }
   
  };
  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: 80,
        margin: 10,
        backgroundColor: backgroundColor,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handlePress}
    >
      <Image source={img} style={{ height: 50, width: 50 }} />
      <MyText text={text} />
    </TouchableOpacity>
  );
};
