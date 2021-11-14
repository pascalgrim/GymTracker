import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { auth } from '../firebase';


import AppBar from '../components/AppBar';
import Header from '../components/Header';
import SessionsItem from '../components/SessionsItem';
import { Colors } from '../colors';

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
            <View style={styles.mainContent}>
                <View style={styles.newSessionContainer}> 
                    <Text style={{color:"white",fontSize:22,marginBottom:20,}}>
                        Jetzt neue Session starten!
                    </Text>
                    <TouchableOpacity  style={styles.btn}>
                        <Text style={styles.btnText}>Neu</Text>
                    </TouchableOpacity>            
                </View>
                <View style={styles.latestSessionsContainer}>
                        <View style={styles.latestTitle}>
                            <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Latest</Text>
                            <Button onPress={() => console.log("hi")} mode="outlined" icon="open-in-new" color={Colors.red} compact={true} style={{borderWidth:0}}>Alle</Button>
                        </View>
                        <ScrollView  style={styles.itemsContainer}>
                            <SessionsItem title="Push" date="1 day ago" />
                            <SessionsItem title="Pull" date="2 days ago" />
                            <SessionsItem title="Legs" date="3 days ago" />
                            <SessionsItem title="Push" date="1 week ago" />
                            <SessionsItem title="Push" date="1 day ago" />
                            <SessionsItem title="Pull" date="2 days ago" />
                            <SessionsItem title="Legs" date="3 days ago" />
                            <SessionsItem title="Push" date="1 week ago" />
                        </ScrollView>
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
       paddingLeft:35,
       paddingRight:35,
   },
   newSessionContainer:{
       flex:1,
       alignItems:"center",
       justifyContent:"center",
     
   
   },
   latestSessionsContainer:{
       flex:1,
       overflow:"hidden",
       paddingBottom:50,
       
       
   },
   latestTitle:{
       justifyContent:"space-between",
       alignItems:"center",
       flexDirection:"row",
       height:40,
       borderWidth:1,
       backgroundColor:"transparent",
       borderWidth:0,
       borderBottomColor:"white",
       borderBottomWidth:1,
       
    },
    
    btn:{
        borderColor:"#F32F4D",
        borderWidth:3,
        height:100,
        width:100,
        borderRadius:999,
        justifyContent:"center",
        alignItems:"center"
    },
    btnText:{
        color:"white",fontSize:20,
    },
    itemsContainer:{
        
    }
  });