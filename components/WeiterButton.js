import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import MyText from './MyText'
import { Colors } from '../colors'

export default function WeiterButton() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={{borderColor:Colors.blue,borderRadius:30,borderWidth:1,alignItems:"center",justifyContent:"center",height:70}}>
            <MyText text="Weiter"/>
        </TouchableOpacity>
    )
}
