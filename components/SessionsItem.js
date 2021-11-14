import { height } from 'dom-helpers';
import React from 'react';
import { View,TouchableOpacity,StyleSheet,Text,Image } from 'react-native';
import { Colors } from '../colors';




export default function SessionsItem({title,date}) {


    //Funktion, die Date in Text umwandelt (z.b. 1 day ago)
    
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.dateContainer}>
                <Text style={{color:"black",fontSize:17,fontWeight:"bold"}}>{date}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
            
        </TouchableOpacity>
        
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        height:60,
        borderRadius:20,
        backgroundColor:"#16161d",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        marginTop:15,
        marginBottom:15,
    },
    dateContainer: {
        flex:3,
        backgroundColor:Colors.red,
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        
    },
    titleContainer:{
        flex:5,
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:5,
        paddingRight:5,
       
    },
    text:{
        color:"white",
        fontSize:19,
    }
    
})
