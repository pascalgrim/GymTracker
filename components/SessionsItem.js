import { height } from 'dom-helpers';
import React from 'react';
import { View,TouchableOpacity,StyleSheet,Text,Image } from 'react-native';
import { StyleSheet,Text,Image} from 'react-native';



export default function SessionsItem({title,date}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}><Text style={{color:"white"}}>TITLE</Text></View>
            <View style={styles.uebungenContainer}>
                <Text style={styles.text}>Übung 1</Text>
                <Text style={styles.text}>Übung 2</Text>
                <Text style={styles.text}>Übung 3</Text>
                <Text style={styles.text}>Übung 4</Text>
                <Text style={styles.text}>Übung 5</Text>
            </View>
            <TouchableOpacity style={styles.openContainer}>
                <Text style={{color:"lightgreen"}}>ÖFFNEN</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:280,
        width:150,
        borderRadius:20,
        marginRight:20,
        backgroundColor:"transparent",
        borderColor:"white",
        borderWidth:1,
    },
    text:{
        color:"white",
    },
    titleContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    uebungenContainer:{
        flex:3,
        justifyContent:"space-evenly",
        paddingLeft:20,
    },
    openContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    }
})
