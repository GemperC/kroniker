import "react-native-gesture-handler";
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, 
      DrawerItem,
      DrawerContentScrollView,
      DrawerItemList
} from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  
} from "react-native";

import {
  WelcomeScreen,
  LoginScreen,
  StartScreen,
  RegisterScreen,
  ResetPasswordScreen,
  HomePage,
  Character,
  Games,
} from "./app/screens/index";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Auth = () => {
  return (
    <>


    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
        <StatusBar style="light" />

    </>
  );
};

function AppDrawerContent(props){
  return (
     <DrawerContentScrollView {...props} contentContainerStyle={{flex:1}}>
       {/*all of the drawer items*/}
       <DrawerItemList {...props}  style={{borderWidth:1}}/>
       <View style={{flex:1,marginVertical:20,borderWidth:1}}>
         {/* here's where you put your logout drawer item*/}
         <DrawerItem 
           label="Log out"
           activeTintColor="white"
           inactiveTintColor="white"

           onPress={()=>{
             signOut(auth);
             props.navigation.replace("Auth");
           }}
           style={{flex:1,justifyContent:'flex-end'}}
         />
       </View>
     </DrawerContentScrollView>
   );
 }

const Home = () => {
  return (
    <Drawer.Navigator 
    drawerContent={
      props=><AppDrawerContent {...props} />
    }
      screenOptions={{
        headerTintColor: "white",
        drawerStyle: {
          width: 200,
          backgroundColor: "black",
        },
        drawerInactiveTintColor: "white",

        headerStyle: {
          backgroundColor: "black", 
        },
      }}
    >
      <Drawer.Screen
        name="HomePage"
        options={{
          drawerLabel: "Home",
          
        }}
        component={HomePage}
      />
      <Drawer.Screen
        name="Games"
        options={{
          drawerLabel: "Games",
          
        }}
        component={Games}
      />
      <Drawer.Screen
        name="Character"
        options={{
          drawerLabel: "Characters",
          
        }}
        component={Character}
      />
    </Drawer.Navigator>
  );
};





export default function App() {
  const [initialRoute, setIntialRoute] = useState('');


  auth.onAuthStateChanged(function(user){
    if (user) {
      setIntialRoute('Home');
      // User is signed in.
    } else {
      setIntialRoute('Auth');
      // No user is signed in.
    }
  });
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
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
