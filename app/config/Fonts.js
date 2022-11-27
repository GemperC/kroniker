import { useFonts } from "expo-font";
import React from "react";
import AppLoading from 'expo-app-loading';
import {
    Text,
    StyleSheet
} from 'react-native';

const Fonts = ({title ,style}) => {
    let [fontLoaded] = useFonts({
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf')
});
if (!fontLoaded) return <AppLoading/>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Regular',
    }
});

export default Fonts;