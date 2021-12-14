import React from 'react'
import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import HeaderNewWorkout from '../../components/HeaderNewWorkout'
import MyText from '../../components/MyText'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../styles'
import WeiterButton from '../../components/WeiterButton'
import WorkoutListe from '../../components/WorkoutListe'



export default function NewWorkoutP2() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
           <HeaderNewWorkout helperText="Vorhandenes Workout auswählen"/>  
           <View style={{marginTop:50,marginBottom:20,justifyContent:"space-between",flex:1,}}>
               <View style={{justifyContent:"center"}}>
                   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                   <MyText text={"Welches Workout?"} fontSize={18} />
                   <IconButton icon="magnify" color='white' />
                   </View>
               
           <WorkoutListe/>
               </View>
           
           <WeiterButton />
           </View>
           
          
        </SafeAreaView>

    )
}
