import React,{useState} from 'react';
import { View,Text ,StyleSheet,TouchableOpacity} from 'react-native';
import { Colors } from '../../colors';
import { TextInput,Chip, Button} from 'react-native-paper';
import myTheme from '../../myTheme';
import { auth } from '../../firebase';
import {updateProfile} from 'firebase/auth';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import BottomAppbar from '../BottomAppbar';

export default function NewSessionFirstInfo() {
    const navigation  = useNavigation()
    const [nameInput,setNameInput] = useState();
   
    const saveName = () =>{
        updateProfile(auth.currentUser,{
            displayName:nameInput
        }).then(() =>{
            console.log("Display Name got updated to: " + nameInput)
        }).catch((error) =>{
            console.log(error)
        })
    }
    return (
        <View style={styles.container}>
            <Text style={{color:"white",fontSize:35,fontWeight:"bold",paddingTop:100,paddingBottom:70}}>Neue Session</Text>
            {/* <Chip style={{color:"white"}}>asjdiasd</Chip> */}
            <Text style={{color:"white",fontSize:20}}>Name eingeben:</Text>
            <TextInput onChangeText={nameInput => setNameInput(nameInput)} value={nameInput}></TextInput>
            <Button theme={myTheme} mode="contained" onPress={saveName}>Name abspeichern</Button>
            <Button theme={myTheme} mode="contained" onPress={() => navigation.navigate("BottomAppbar")}>Show Info</Button>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor:Colors.bg,
    },
    
    
  });
  
  