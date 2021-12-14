import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MyText from './MyText'
import { IconButton } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-web'
export default function HeaderNewWorkout({helperText}) {
    const navigation = useNavigation();
    return (
        <View>
            {/* navigation container*/}
            <View style={{height:100,justifyContent:"center"}}>
                <IconButton icon="chevron-left" color="white" size = {30} onPress={() =>navigation.goBack()}/>
            </View>
            <View style={{alignItems:"center"}}>
                <MyText text="Neues Workout" fontSize={30}/>
                <View style={{marginTop:20}}>
                <MyText text={helperText} color="grey"/>
                </View>
                
            </View>            
        </View>
    )
}
