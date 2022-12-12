import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  WelcomeScreen,
  LoginScreen,
  StartScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomePage,
} from "./app/screens/index";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import LoginScreen from "./app/screens/LoginScreen";
// import LoginScreen from "./app/auth/screens/StartScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "fade_from_bottom",
        }}
      >
              <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        {/* <Stack.Screen name="HomePage" component={HomePage} /> */}

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
