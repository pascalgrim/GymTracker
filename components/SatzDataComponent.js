import React, { useState } from "react";
import { Alert, TouchableOpacity, Vibration, View } from "react-native";
import { IconButton } from "react-native-paper";
import { DBM } from "../DatabaseManager";
import MyText from "./MyText";
import MySnackBar from "./MySnackBar"


export default function SatzDataComponent({ Satz, Wdh, workoutID,uebungsID,satzID, Gewicht, showPrevious = false,color="grey",showDelete,setShowDelete}) {
  const col = showPrevious? color : "white"
  const [showSnackbar,setShowSnackbar] = useState(false)
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <TouchableOpacity
      style={{
        flex:1,
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent:showPrevious?"center": "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: 60,
        marginVertical: 5,
      }}
      onLongPress={ () => {setShowDelete(!showDelete); Vibration.vibrate(50)}}
      activeOpacity={1}
    >  
       {showPrevious ? null :  <View style={{
          backgroundColor: "white",
          borderRadius: 20,
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 5,
        }}><MyText text={Satz} color="black" fontSize={17} /></View>}
      
      
      <View style={{ paddingTop: 5 }}>
        <MyText text={showPrevious?`${Wdh} x `:`${Wdh} WDH`} color={col} />
      </View>
      <View style={{ paddingTop: 5 }}>
        <MyText text={showPrevious?`${Gewicht}`:`${Gewicht} Kg`} color={col} />
      </View>      
    </TouchableOpacity>
     {showDelete?<IconButton icon="delete-outline" color="red" onPress={() => DBM.deleteSatz(workoutID,uebungsID,satzID).then(() => {Vibration.vibrate(50);setShowDelete(false)}) }/>: null }

     </View>
  );
}
