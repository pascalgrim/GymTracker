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
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import Dashboard from "./Screens/Dashboard";
import NewSessionFirstInfo from "./Screens/SessionScreens/NewSessionFirstInfo";
// STACK NAVIGATOR
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotLoggedInScreen from "./Screens/StartScreen";

import LoginScreen from "./Screens/Login/LoginScreen";
import SignupScreen from "./Screens/Signup/SignupScreen";
import SettingsScreen from "./Screens/SettingsScreens/SettingsScreen";
import UserInfosScreen from "./Screens/SettingsScreens/SettingsSeperat/UserInfosScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="Start"
              component={NotLoggedInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="NewSessionFirstInfo"
              component={NewSessionFirstInfo}
              options={{ headerShown: false }}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Group>
              <Stack.Screen
                name="UserInfoScreen"
                component={UserInfosScreen}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </Stack.Group>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131321",
  },
});
