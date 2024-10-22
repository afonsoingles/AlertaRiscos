import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import CloseButton from '../components/CloseButton';

export default function About() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });

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
