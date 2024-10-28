import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import LiveMessage from '../components/liveMessage';
import  WelcomePage_styles  from '../styles/welcomePage';
import ImportantWarnings from '../components/ImportantWarnings';
import MainbarBottom from '../components/MainbarBottom';
export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });

  
  return (
    <LinearGradient 
      colors={["#ff5757", "#ff3b5f"]} 
      style={WelcomePage_styles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <View style={WelcomePage_styles.view}>
        <Image style={WelcomePage_styles.logoBanner} source={require('../assets/images/AlertaRiscosBanner.png')} />
        
        <ImportantWarnings />
        
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: '5%'}}>
          <MainbarBottom />
        </View>
        
        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}


//TODO:  Prevencao, settings