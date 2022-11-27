import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View ,
  SafeAreaView,
  TouchableOpacity,
  
} from 'react-native';
import colors from './app/config/colors';

export default function App() {
    return (
        <SafeAreaView  style={styles.page}>
          <View>
          <Text style={styles.header}>Krøniker</Text>
          </View>
          <TouchableOpacity
        style={styles.button
          
        }
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            // fontFamily: 'Roboto-MediumItalic',
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
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.textWhite

      },

      button: {
        backgroundColor: colors.primary,
        padding: 20,
        width: '90%',
        borderRadius: 10,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
  });
