import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

//FONTS
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// STACK NAVIGATOR
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS

import NotLoggedInScreen from "./Screens/StartScreen";
import LoginScreen from "./Screens/Login/LoginScreen";
import SignupScreen from "./Screens/Signup/SignupScreen";
import SettingsScreen from "./Screens/SettingsScreens/SettingsScreen";
import UserInfosScreen from "./Screens/SettingsScreens/SettingsSeperat/UserInfosScreen";

import SignUpChooseScreen from "./Screens/Signup/SignUpChooseScreen";
import HomeScreen from "./Screens/Routes/HomeRoute";
import NewWorkoutP1 from "./Screens/SessionScreens/newWorkoutP1";
import NewWorkoutP2 from "./Screens/SessionScreens/NewWorkoutP2";
import NewWorkoutP2Eigen from "./Screens/SessionScreens/NewWorkoutP2Eigen";
import WorkoutScreen from "./Screens/SessionScreens/WorkoutScreen";
import UebungHelperScreen from "./Screens/SessionScreens/Uebungen/UebungHelperScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
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
              name="SignUpChooseScreen"
              component={SignUpChooseScreen}
              options={{ headerShown: false }}
            />
          </Stack.Group>
          <Stack.Group>
            {/* HOMEROUTE  */}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen
              name="NewWorkoutP1"
              component={NewWorkoutP1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewWorkoutP2"
              component={NewWorkoutP2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewWorkoutP2Eigen"
              component={NewWorkoutP2Eigen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WorkoutScreen"
              component={WorkoutScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UebungHelperScreen"
              component={UebungHelperScreen}
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
