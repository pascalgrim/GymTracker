import { height } from 'dom-helpers';
import React from 'react';
import { View } from 'react-native';
import { StyleSheet,Text,Image} from 'react-native';
import { Button } from 'react-native-paper';



export default function SessionsItem({title,date}) {
    
    return (
        <View style={styles.container}>
            <View style= {styles.left}>
                <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>{title}</Text>
            </View>
            <View style={styles.mid}>
            <Text>{date}</Text> 
            </View>
            <View style= {styles.right}>
                <Button icon="arrow-right"  onPress={() => console.log("pressed arrow button")}/>   
            </View>
            
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        height:60,
        borderRadius:20,
        flexDirection:"row",
        marginTop:15,
        marginBottom:15,
        backgroundColor:"white",
        
    },
    left:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    mid:{
        flex:2,
        flexDirection:"row",
        alignItems:"center",
    },
    right:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        
    },
})
