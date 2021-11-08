import { height } from 'dom-helpers';
import React from 'react';
import { View,TouchableOpacity,StyleSheet,Text,Image } from 'react-native';





export default function SessionsItem({title,date}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}><Text style={styles.text}>PUSH</Text><Text style={styles.text}>08.11</Text></View>
            <View style={styles.uebungenContainer}>
                <Text style={styles.uebungText}>Bankdrücken</Text>
                <Text style={styles.uebungText}>Schrägbankdrücken</Text>
                <Text style={styles.uebungText}>Butterfly</Text>
                <Text style={styles.uebungText}>Seitheben</Text>
                <Text style={styles.uebungText}>Schulterdrücken</Text>
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
        height:"90%",
        width:200,
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
        justifyContent:"space-evenly",
        flexDirection:"row",

        

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
    openContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    }
})
