import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const myStyle = StyleSheet.create({
    mainContent:{
        flex:1,
        backgroundColor:Colors.bg,
        padding:20,
    },
    textInput: {
        marginTop: 10,
        marginBottom: 10,
      },
    inputContainer:{
        marginTop:20,
        marginBottom:20,
      },
})
export default myStyle;