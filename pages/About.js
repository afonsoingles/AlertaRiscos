<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import LiveMessage from '../components/liveMessage';
import  WelcomePage_styles  from '../styles/welcomePage';
import ImportantWarnings from '../components/ImportantWarnings';
import MainbarBottom from '../components/MainbarBottom';
import WarningBody from '../components/WarningBody';
import { StyleSheet } from 'react-native';



export default function AboutUs({ navigation }) {
=======
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import CloseButton from '../components/CloseButton';

export default function About() {
>>>>>>> f35cda5869b8307cb32601219ceb1ade5cb50d1a
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });

<<<<<<< HEAD
  
  return (
    <LinearGradient 
      colors={["#ff5757", "#ff3b5f"]} 
      style={WelcomePage_styles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <View style={WelcomePage_styles.view}>
        <Image style={WelcomePage_styles.logoBanner} source={require('../assets/images/AlertaRiscosBanner.png')} />
        <Text style={styles.centerTopText}>Informações</Text>
        <Text style={styles.descriptionText}>
          
        </Text>
        

        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: '5%'}}>
          <MainbarBottom />
        </View>
        
        <StatusBar style="auto" />
      </View>
=======
  return (
    <LinearGradient 
      colors={["#ff5757", "#ff3b5f"]} 
      style={styles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Sobre o AlertaRiscos</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            AlertaRiscos é um aplicativo que alerta as pessoas em caso de crise em Portugal. 
            Por exemplo, se um incêndio estiver próximo de alguém, enviaremos um alerta para essa pessoa, 
            informando como reagir.
          </Text>
        </View>
        <View style={{marginTop: 50, marginBottom: 50}}>
          <CloseButton />
        </View>
      </ScrollView>
>>>>>>> f35cda5869b8307cb32601219ceb1ade5cb50d1a
    </LinearGradient>
  );
}

<<<<<<< HEAD

const styles = StyleSheet.create({
  centerTopText: {
    fontFamily: 'RedHatDisplay_700Bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: '2%',
    marginBottom: '5%'
  },
  descriptionText: {
    fontFamily: 'RedHatDisplay_700Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: '5%'
  }
});
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'RedHatDisplay_700Bold',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'RedHatDisplay_700Bold',
  },
});
>>>>>>> f35cda5869b8307cb32601219ceb1ade5cb50d1a
