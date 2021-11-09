import React from 'react'
import {Button,TextInput, DarkTheme,HelperText} from 'react-native-paper';
import { View,StyleSheet,Text } from 'react-native';
import { useRef ,useState, useEffect} from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

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
        .catch(error=>alert(error))
        

}

    return (
        <View style={styles.container}>
            <TextInput label="Email"  mode="outlined" value={email} style={styles.textInput} onChangeText={email => setEmail(email)}/>
            <TextInput  label="Password" mode="outlined" secureTextEntry={true} value={pw} style={styles.textInput} onChangeText={pw => setPw(pw)}/>
            <Button  mode="contained" onPress={handleSubmit}>Sign Up</Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center", 
        padding:20,
    },
    textInput:{
        marginTop:10,
        marginBottom:10,
    }
  });
  