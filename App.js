import React, { useEffect, useState } from 'react';
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
import AboutUs from './pages/About';

// ENV
import { ONESIGNAL_APP_ID } from '@env';
const Stack = createStackNavigator();


const App = () => {
  
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize(ONESIGNAL_APP_ID);
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
        <Stack.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false,  headerBackTitleVisible: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
