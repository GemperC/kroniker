import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import colors from "../config/Colors";
import WizardImg from "../assets/images/wizard.svg";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function WelcomeScreen({navigation}) {
    return (
      <SafeAreaView style={styles.page}>
        <View>
          <Text style={styles.title}>Krøniker</Text>
        </View>
        <WizardImg width="50%" height="50%" style={{ marginBottom: 50 }} />
        <TouchableOpacity
          style={styles.button}
        //   onPress={() => navigation.navigate("LoginScreen")}

          onPress={() => navigation.replace("LoginScreen")}

        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Begin Your Story
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  
    title: {
      justifyContent: "flex-start",
      marginTop: 50,
      fontSize: 40,
      fontWeight: "bold",
      color: colors.textWhite,
    },
  
    button: {
      backgroundColor: colors.primary,
      padding: 20,
      width: "80%",
      borderRadius: 10,
      marginBottom: 35,
      flexDirection: "row",
      justifyContent: "center",
    },
  });