import React, { useEffect, useState } from 'react';
import { Alert, View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';

// SCREENS
import Welcome from './pages/Welcome';
import FloodWarning from './pages/warnings/Floods';
import HeavyRainWarning from './pages/warnings/heavyRain';
import EarthquakeWarning from './pages/warnings/EarthQuake';
import FireWarning from './pages/warnings/FireWarning';

const Stack = createStackNavigator();


const App = () => {
  
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize("e18cbe2a-345f-4303-a7f2-e5ec6857f956");
  OneSignal.Notifications.requestPermission(true);
  

  OneSignal.Notifications.addEventListener('click', (event) => {
    console.log('OneSignal: notification clicked:', event);
  });


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home"  component={Welcome} options={{ headerShown: false,  headerBackTitleVisible: false }}/>
        <Stack.Screen name="FloodWarning" component={FloodWarning} options={{ headerShown: false,  headerBackTitleVisible: false }}/>
        <Stack.Screen name="HeavyRainWarning" component={HeavyRainWarning} options={{ headerShown: false,  headerBackTitleVisible: false }}/>
        <Stack.Screen name="EarthquakeWarning" component={EarthquakeWarning} options={{ headerShown: false,  headerBackTitleVisible: false }}/>
        <Stack.Screen name="FireWarning" component={FireWarning} options={{ headerShown: false,  headerBackTitleVisible: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
