import React from "react";
import { TouchableOpacity, View } from "react-native";
import MyText from "./MyText";

export default function SatzDataComponent({ Satz, Wdh, Gewicht, showPrevious = false,color="grey"}) {
  const col = showPrevious? color : "white"
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent:showPrevious?"center": "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: 60,
        marginVertical: 5,
      }}
    
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
  );
}
