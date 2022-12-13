import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Carousel from 'react-native-reanimated-carousel';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';


// import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch.js';
import ListItem from '../components/ListItem';
import {freeGames, paidGames, sliderData} from '../model/data';
import CustomImageCarousalSquare from '../components/CustomImageCarousalSquare';
import { theme } from '../config/Theme';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {

  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <Text {...props} style={{fontSize: 22, color: theme.colors.white, fontWeight: 'bold' }}>
          Hello Tom Cohen
        </Text> 
      ),

    });
  }, [navigation]);

  return (
    <>
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <ScrollView style={{padding: 20, paddingTop: 5}}>
        
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, color:theme.colors.white}}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>
  <CustomImageCarousalSquare data={sliderData}/>
        {/* <Carousel
                loop
                width={windowWidth-40}
                height={windowWidth / 2}
                // autoPlay={true}
                data={sliderData}
                scrollAnimationDuration={1000}
                renderItem={renderBanner}

            /> */}


        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color:theme.colors.white}}>
            News
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>
        


        <View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Your Games"
            option2="Your Charecters"
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
      </ScrollView>
    </SafeAreaView>
    <StatusBar style="light" />
    </>
  );
}







