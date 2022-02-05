import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,  SafeAreaView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import MyText from "../../components/MyText";
import { IconButton } from "react-native-paper";
import TripleStats from "../../components/TripleStats";
import WorkoutListe from "../../components/WorkoutListe";
import { styles } from "../../styles";
import { auth } from "../../firebase";
import { Colors } from "../../colors";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* MAIN CONTENT */}
      <View style={{ flex: 1 }}>
        <View >
          <View style={{justifyContent:"center",alignItems:"center",paddingBottom:20}}>
            <IconButton icon="account" color="white" size={35}/>
          <MyText text="Dein Profil" fontSize={25} bold/>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-evenly",paddingBottom:20}}> 
        <MyButton text={"Workouts"} func={ () => navigation.navigate("allWorkoutsScreen")}/>
        <MyButton text={"Statistiken"}/>
        </View>
        </View>
        
       
        {/* Deine letzten Workouts Container */}
        <View>
          <View style={{ marginTop: 20 }}>
            <MyText text={"Deine letzten Workouts"} fontSize={18} />
          </View>
          <WorkoutListe editable={false} />
        </View>
        <IconButton
          icon="plus"
          color="black"
          size={40}
          style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: 20,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("NewWorkoutP2Eigen")}
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

// HEADER
const Header = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.navigate("Settings");
  };
  const username = auth.currentUser.displayName;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 130,
      }}
    >
      <MyText text={`Hi ${username === null? "":username}`} fontSize={25} />
      <IconButton
        icon="menu"
        color="white"
        size={45}
        // onPress={() => auth.signOut().then(() => navigation.navigate("Start"))}
        onPress={handleMenuPress}
      />
    </View>
  );
};

const MyButton = ({text,func}) =>{
return( <TouchableOpacity onPress={func} style={{justifyContent:"center",padding:10,alignItems:"center",borderColor:"white",width:130,borderWidth:1,borderRadius:20,height:80}}>
<MyText text={text} fontSize={20} />
</TouchableOpacity>)
}