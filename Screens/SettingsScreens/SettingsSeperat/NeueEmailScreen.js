import React, { useState } from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import Header from '../Header'
import myStyle from '../../../mystyle'
import { TextInput } from 'react-native-paper'
import myTheme from '../../../myTheme'
import { updateEmail } from "firebase/auth";
import { auth } from '../../../firebase'

export default function NeueEmailScreen() {
    const [mail, setMail] = useState("");
    const [pw, setPw] = useState("");

    const handlePress = () =>{
        
        console.log(auth.currentUser)
        updateEmail(auth.currentUser,mail).then(() =>{
        console.log("Email got updated successfully!")
        }).catch((error) =>{
        console.log(error)
        })
        console.log(auth.currentUser.email)
    }
    return (
        <View style={{flex:1}}>
            <Header title="Neue E-Mail" />
            <View style={myStyle.mainContent}>
                <View style={myStyle.inputContainer}>
                    <Text style={styles.text}>Gebe hier deine neue Email ein</Text>
                    <TextInput
                        theme={myTheme}
                        label="Email"
                        mode="outlined"
                        value={mail}
                        style={myStyle.textInput}
                        onChangeText={(email) => setMail(email)}/>
                </View>
                <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Bestätigen
          </Text>
        </TouchableOpacity>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color:"white"
    },
    button: {
        backgroundColor: "white",
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
      },
})