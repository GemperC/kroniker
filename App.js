import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  WelcomeScreen,
  LoginScreen,
  StartScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomePage,
  Charecter,
} from "./app/screens/index";
import { SafeAreaProvider } from 'react-native-safe-area-context';






const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Auth = () => {
  return (
    <Stack.Navigator 
    initialRouteName="WelcomeScreen"
    screenOptions={{
      headerShown: false,
    }}
    >
 <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};


const Home = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Drawer.Screen
        name="HomePage"
        options={{
          drawerLabel: 'Home Page',
          activeTintColor: '#e91e63',
        }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Charecter"
        options={{
          drawerLabel: 'Charecter',
          activeTintColor: '#e91e63',
        }}
        component={Charecter}
      />
    </Drawer.Navigator>
  );
};


export default function App() {
  return (
    <SafeAreaProvider>

    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Auth'
        screenOptions={{
          headerShown: false,
          presentation: "card",
          animationTypeForReplace: "push",
          animation: "fade_from_bottom",
        }}
      >

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} />

      </Stack.Navigator>

    </NavigationContainer>

    </SafeAreaProvider>
  );
}
