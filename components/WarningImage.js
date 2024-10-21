import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, RedHatDisplay_500Regular, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import { Image } from 'react-native';


export default function WarningImage({ title, image }) {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_500Regular,
    RedHatDisplay_700Bold,
  });

  
  if (image === "earthquake") {
    image = require('../assets/images/DropCoverHold.png');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Image
        source={image}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    alignItems: 'left',
    marginTop: 20,
    borderRadius: 10,
    marginRight: 15,
  },
  header: {
    fontFamily: 'RedHatDisplay_700Bold',
    fontSize: 22, // Increased font size for the header
    color: 'white',
    marginBottom: 0,
  },
  body: {
    fontFamily: 'RedHatDisplay_500Regular',
    fontSize: 18, // Increased the font size for body text
    color: 'white',
  },
  boldText: {
    fontFamily: 'RedHatDisplay_700Bold',
    fontSize: 18, // Made the bold text larger
    color: 'white',
  },
  image: {
    position: 'relative',
    left: 0,
    width: "100%", // Changed width to 100% to take full width of the container
    height: 120,
  },
});
