import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { auth } from '../firebase';


import AppBar from './AppBar';
import Header from './Header';
import SessionsItem from './SessionsItem';

export default function Dashboard2() {
    const navigation  = useNavigation()

    const handle_logout = () => {
        auth
        .signOut()
        .then(()=>{
            navigation.replace("Start")
        })
        .catch(error => alert(error))
    }

    return (
        <View style={styles.container}>
            {/* <Header/> */}
            <Text style={{color:"white",textAlign:"center"}}>Logged in as {auth.currentUser.email}</Text>
            <Button onPress={handle_logout}>Logout</Button>
            <View style={styles.mainContent}>
            <View style={styles.latestSessionsContainer}>
                    {/* <View style={styles.latestTitle}><Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Latest</Text></View> */}
                    <ScrollView horizontal={true} style={styles.itemsContainer}>
                        <SessionsItem title="Push" date="7.11" />
                        <SessionsItem title="Push" date="7.11" />
                        <SessionsItem title="Push" date="7.11" />
                        <SessionsItem title="Push" date="7.11" />
                        <SessionsItem title="Pash" date="7.11" />
                        <SessionsItem title="Push" date="7.11" />
                    </ScrollView>
                </View>
                <View style={styles.newSessionContainer}>
                    
                    <TouchableOpacity  style={styles.btn}>
                        <Text style={styles.btnText}>Neu</Text>
                    </TouchableOpacity>            
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
       backgroundColor:"#131321",
   },
   mainContent:{
    
       flex:1,
   },
   newSessionContainer:{
       flex:1,
       alignItems:"center",
       justifyContent:"center",
       marginBottom:50,
   
   },
   latestSessionsContainer:{
       flex:2,
       overflow:"hidden",
       
       
   },
   latestTitle:{
       borderWidth:2,
       backgroundColor:"white",
       paddingBottom:10,
       paddingTop:10,
       paddingLeft:20},
       itemsContainer:{
       marginTop:50,
       paddingLeft:20,
    },
    btn:{
        borderColor:"#F32F4D",borderWidth:3,height:100,width:100,borderRadius:999, justifyContent:"center",alignItems:"center"
    },
    btnText:{
        color:"white",fontSize:20,
    }
  });