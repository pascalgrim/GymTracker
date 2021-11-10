import React from 'react'
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import theme from '../myTheme'


export default function AppBar() {
    const handleButtonPress = (field) =>{
        console.log(field)
    }
    return (
        <Appbar style={styles.bottom} theme = {theme}>
            <Appbar.Action icon="home" onPress={() => handleButtonPress("Home")}/>
            <Appbar.Action icon="poll" onPress={() => handleButtonPress("Stats")} />
            <Appbar.Action icon="account" onPress={() => handleButtonPress("Profile")} />
            <Appbar.Action icon="cog" onPress={() => handleButtonPress("Settings")}/>
        </Appbar>
    )
}

const styles = StyleSheet.create({
    bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent:"space-evenly",
      backgroundColor:"#131321",
    
    },
  });