import React from 'react'
import {Button,TextInput, DarkTheme,HelperText} from 'react-native-paper';
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { useRef ,useState, useEffect} from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../colors';
import myTheme from '../myTheme';

export default function Signup() {
    const [email,setEmail] = useState("");
    const [pw,setPw] = useState("");
    const [err,setErr] = useState("");
   
    const navigation = useNavigation()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user){
                navigation.replace("Dashboard")
            }
        })
        return unsubscribe;
    }, [])

    const handleAlreadyHaveAccount = () =>{
        navigation.navigate("Login")
    }

    const handleSubmit = () =>{
        auth
        .createUserWithEmailAndPassword(email,pw)
        .then(
            userCredentials=> {
                const user = userCredentials.user;
                console.log(user.email)
             },
             setErr("")
        )
        .catch(error => alert(error))
        

}
   
    return (
        <View style={styles.container}>
            <View style={{flex:2,justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:35,fontWeight:"bold"}}>Lass uns anfangen...</Text>
            </View>
            <View style={{flex:3}}>
                <TextInput theme = {myTheme} label="Email"  mode="outlined" value={email} style={styles.textInput} onChangeText={email => setEmail(email)}/>
                <TextInput theme = {myTheme} label="Passwort" mode="outlined" secureTextEntry={true} value={pw} style={styles.textInput} onChangeText={pw => setPw(pw)}/>
                <TouchableOpacity onPress = {handleSubmit}style={styles.button}><Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Registrieren</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleAlreadyHaveAccount}><Text style={styles.bottom}>Ich habe schon einen Account.</Text></TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"space-evenly", 
        padding:20,
        backgroundColor:Colors.bg,
    },
    textInput:{
        marginTop:10,
        marginBottom:10,
    },
    button:{
        backgroundColor:"white",
        height:60,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:40,
    },
    bottom:{
        marginTop:50,
        color:"white",
        textAlign:"center",
        
    }
  });
  
  