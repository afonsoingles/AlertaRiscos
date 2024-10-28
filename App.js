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
import About from './pages/About';
import Prevention from './pages/Prevention';
import Settings from './pages/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Initialize OneSignal
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize("6e671f3d-ed8d-4edd-9803-53d1d65741a1");
    OneSignal.Notifications.requestPermission(true);

    // Login with external ID
    const loginWithExternalId = async () => {
      try {
        let externalId = await AsyncStorage.getItem('externalId');
        if (!externalId) {
          console.log("No external ID!");
          externalId = Math.random().toString(36).substring(2, 15);
          await AsyncStorage.setItem('externalId', externalId);
          await AsyncStorage.removeItem('checkedMunicipalities');
        }
        await OneSignal.login(externalId);
        console.log('Logged in with external ID:', externalId);
      } catch (error) {
        console.error('Failed to login with external ID:', error);
      }
    };

    loginWithExternalId();

    

    // Get user tags and check saved municipalities
    const getUserTags = async () => {
      try {
        const onesignalId = await OneSignal.User.getExternalId();
        console.log('OneSignal ID:', onesignalId);
        const tags = await OneSignal.User.getTags();
        console.log('User Tags:', tags);
      } catch (error) {
        console.error('Failed to get user tags:', error);
      }
    };

    const loadMunicipalities = async () => {
      try {
        const municipalities = await AsyncStorage.getItem('checkedMunicipalities');
        if (municipalities !== null) {
          console.log('Municipalities:', JSON.parse(municipalities));
        } else {
          console.log('No municipalities found');
        }
      } catch (error) {
        console.error('Failed to load municipalities:', error);
      }
    };

    getUserTags();
    loadMunicipalities();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Welcome} options={{ headerShown: false, headerBackTitleVisible: false }} />
        <Stack.Screen name="FloodWarning" component={FloodWarning} options={{ headerShown: false, headerBackTitleVisible: false }} />
        <Stack.Screen name="HeavyRainWarning" component={HeavyRainWarning} options={{ headerShown: false, headerBackTitleVisible: false }} />
        <Stack.Screen name="EarthquakeWarning" component={EarthquakeWarning} options={{ headerShown: false, headerBackTitleVisible: false }} />
        <Stack.Screen name="FireWarning" component={FireWarning} options={{ headerShown: false, headerBackTitleVisible: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false, headerBackTitleVisible: false }} />
        <Stack.Screen name="Prevention" component={Prevention} options={{ headerShown: false, headerBackTitleVisible: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false, headerBackTitleVisible: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
