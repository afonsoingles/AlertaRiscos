import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import CloseButton from '../components/CloseButton';

export default function Prevention() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });

  const handleDocumentNavigation = (document) => {
    // Add navigation logic here
  };

  return (
    <LinearGradient 
      colors={["#ff5757", "#ff3b5f"]} 
      style={styles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Prevenção</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.containerBox} onPress={() => handleDocumentNavigation('document1')}>
            <Image source={require('../assets/images/document1.png')} style={styles.image} />
            <Text style={styles.containerText}>Documento 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerBox} onPress={() => handleDocumentNavigation('document2')}>
            <Image source={require('../assets/images/document1.png')} style={styles.image} />
            <Text style={styles.containerText}>Documento 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerBox} onPress={() => handleDocumentNavigation('document3')}>
            <Image source={require('../assets/images/document1.png')} style={styles.image} />
            <Text style={styles.containerText}>Documento 3</Text>
          </TouchableOpacity>
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
  containerBox: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  containerText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'RedHatDisplay_700Bold',
  },
});
