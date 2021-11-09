import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import MenuCard from "./components/menuCard";

// LOGOS
import mainLogo from "./imgs/mainLogo.png";
import SettingsIcon from "./imgs/mainSettings.png";

// ICONS FOR CARDS
import IconSessions from "./imgs/schreibe-brief.png";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";

// STACK NAVIGATOR 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotLoggedInScreen from "./components/NotLoggedInScreen";
import LoginScreen from "./components/LoginScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator >
        <Stack.Screen name="Start" component={NotLoggedInScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131321",
    
  },
});
