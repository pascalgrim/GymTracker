import React from 'react'
import { View } from 'react-native'
import MyText from './MyText'

export default function SatzDataComponent({Satz,Wdh,Gewicht}) {
    return (
        <View style={{backgroundColor:"transparent",flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingLeft:10,paddingRight:10,height:50}}>
            <MyText text={Satz} />
            <MyText text={Wdh} />
            <MyText text={Gewicht} />
        </View>
    )
}
