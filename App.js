import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View ,
  SafeAreaView,
  TouchableOpacity,
  
} from 'react-native';
import colors from './app/config/Colors';
import WizardImg from './app/assets/images/Wizard.svg';
import * as Svg from 'react-native-svg';
import { SvgUri } from 'react-native-svg';




export default function App() {

    return (
        <SafeAreaView  style={styles.page}>
          <View>
          <Text style={styles.header}>Krøniker</Text>
          </View>
          <WizardImg     width="20%"
    height="20%" />

          {/* <SvgUri
    width="20%"
    height="20%"
    uri="./app/assets/images/Wizard.svg"
/> */}

          <TouchableOpacity 
          style={styles.button}
        >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Let's Begin
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
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.textWhite

      },

      button: {
        backgroundColor: colors.primary,
        padding: 20,
        width: '80%',
        borderRadius: 10,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'center',
      }
  });
