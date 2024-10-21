import React from 'react';
import { View, Text } from 'react-native';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import liveMessage_styles from '../styles/liveMessage';
import * as Device from 'expo-device';



export default function LiveMessage({ text }) {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });
  
  return (
    
    <View style={liveMessage_styles.liveMessage}>
        <View style={liveMessage_styles.redLiveCircle}></View>
        <Text style={liveMessage_styles.liveMessageTitle}>LIVE</Text>
        <View style={liveMessage_styles.divisorBar}></View>
        <Text style={liveMessage_styles.liveMessageDescription} numberOfLines={1} ellipsizeMode="tail">{text || ""}</Text>
    </View>
          
        

    
  );
}

