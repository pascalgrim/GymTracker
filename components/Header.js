import React from 'react'
import { Appbar } from 'react-native-paper'
import myTheme from '../myTheme'
import { StyleSheet } from 'react-native'

export default function Header() {
  return (
    <Appbar.Header style={styles.container} theme={myTheme}>
      <Appbar.Content title="Sessions" style={{justifyContent:"center",alignItems:"center"}} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#131321",
    
   
  }
})
