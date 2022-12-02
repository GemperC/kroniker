import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "./app/config/Colors";
import WizardImg from "./app/assets/images/wizard.svg";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  WelcomeScreen,
  LoginScreen,
  StartScreen,
} from "./app/screens/index";

// import LoginScreen from "./app/screens/LoginScreen";
// import LoginScreen from "./app/auth/screens/StartScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "fade_from_bottom",
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
