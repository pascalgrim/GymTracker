import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import AppBar from './AppBar';
import Header from './Header';
import SessionsItem from './SessionsItem';

export default function Dashboard2() {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.mainContent}>
                <View style={styles.newSessionContainer}>
                    <Button icon="plus" mode="contained" style={{backgroundColor:"#F32F4D"}}>New</Button>
                </View>
                <View style={styles.latestSessionsContainer}>
                    <View style={styles.latestTitle}><Text style={{color:"white",fontSize:20}}>Latest</Text></View>
                    <SessionsItem title="Push" date="7.11" />
                    <SessionsItem title="Push" date="7.11" />
                    <SessionsItem title="Push" date="7.11" />
                    <SessionsItem title="Push" date="7.11" />
                    <SessionsItem title="Push" date="7.11" />
                    <SessionsItem title="Push" date="7.11" />
                </View>
            </View>
            
            <AppBar/> 
        </View>
        
    )
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       paddingTop:20,
   },
   mainContent:{
    paddingLeft:20,
    paddingRight:20,
       flex:1,
   },
   newSessionContainer:{
       flex:1,
       justifyContent:"center",
       alignItems:"center"
   
   },
   latestSessionsContainer:{
       flex:2,
   },
   latestTitle:{
       alignItems:"center",
       justifyContent:"center",
       borderBottomColor:"white",
       borderBottomWidth:1,
       paddingBottom:10},
  });