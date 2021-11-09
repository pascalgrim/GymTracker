import { height } from 'dom-helpers';
import React from 'react';
import { View,TouchableOpacity,StyleSheet,Text,Image } from 'react-native';





export default function SessionsItem({title,date}) {
    
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.titleContainer}><Text style={styles.text}>8 November</Text></View>
            <View style={styles.uebungenContainer}>
                <Text style={styles.uebungText}>Bankdrücken</Text>
                <Text style={styles.uebungText}>Schrägbankdrücken</Text>
                <Text style={styles.uebungText}>Butterfly</Text>
                <Text style={styles.uebungText}>Seitheben</Text>
                <Text style={styles.uebungText}>Schulterdrücken</Text>
            </View>
              
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"90%",
        width:200,
        borderRadius:20,
        marginRight:20,
        backgroundColor:"transparent",
        borderColor:"white",
        borderWidth:1,
    },
    text:{
        color:"black",
        backgroundColor:"#F32F4D",
        padding:10,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    titleContainer:{
        flex:1,
        alignItems:"center",
        
    },
    uebungenContainer:{
        flex:3,
        flexDirection:"row",
        flexWrap:"wrap",
       
        paddingLeft:10,
        paddingRight:10,
    },
    uebungText:{
        backgroundColor:"white",
        color:"black",
        borderRadius:10,
        padding:6,
        margin:5,
       
    },
    
})
