import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import MainbarBottom from '../components/MainbarBottom';
import { useNavigation } from '@react-navigation/native';
export default function About() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });

  const navigation = useNavigation();
  return (
    <LinearGradient 
      colors={["#ff5757", "#ff3b5f"]} 
      style={styles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.logoBanner} source={require('../assets/images/AlertaRiscosBanner.png')} />
        <View style={styles.title}>
          <Text style={styles.titleText}>Sobre a App</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            {"O AlertaRiscos é uma aplicação independente desenvolvida para alertar os seus utilizadores em caso de catástrofes naturais perto de si.\n\nA aplicação foi desenvolvida com o intuito de ajudar a população a prevenir e a reagir a situações de emergência, fornecendo informações úteis e alertas em tempo real."}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: '5%'}}>
          <MainbarBottom navigation={navigation} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  
  titleText: {
    fontSize: 30,
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
    fontFamily: 'RedHatDisplay_400Regular',
  },
  logoBanner: {
    marginTop: 30,
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
});
