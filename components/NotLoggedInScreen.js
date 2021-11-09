import React from 'react'
import {Button,TextInput, DarkTheme,HelperText} from 'react-native-paper';
import { View,StyleSheet } from 'react-native';
import { useRef ,useState, useEffect} from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function NotLoggedInScreen() {
    
    const navigation = useNavigation()

    const handle_login_press = () =>{
        navigation.navigate("Login")

    }
    const handle_signup_press = () =>{
        navigation.navigate("Signup")
    }


    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={handle_login_press}>Log In</Button>
            <Button mode="contained" onPress={handle_signup_press}>Sign Up</Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"space-evenly", 
        padding:20,
    },
    
  });
  