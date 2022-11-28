import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View ,
  SafeAreaView,
  TouchableOpacity,
  
} from 'react-native';
import colors from './app/config/Colors';
import WizardImg from './app/assets/images/wizard.svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={WelcomeScreen} name='WelcomeScreen' />
        <Stack.Screen component={HomeScreen} name='HomeScreen' />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

function WelcomeScreen() {

    return (
        <SafeAreaView  style={styles.page}>
          <View>
          <Text style={styles.header}>Krøniker</Text>
          </View>
          <WizardImg width="50%" height="50%" style={{marginBottom: 50}}/>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
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
      alignItems: 'center',
      justifyContent: 'center',
      },

      header: {
        justifyContent: 'flex-start',
        marginTop: 50,
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.textWhite

      },

      button: {
        backgroundColor: colors.primary,
        padding: 20,
        width: '80%',
        borderRadius: 10,
        marginBottom: 35,
        flexDirection: 'row',
        justifyContent: 'center',
      }
  });



  const HomeScreen = () => {
    return (
      <View>
        
      </View>
    )
  }

  export default App;