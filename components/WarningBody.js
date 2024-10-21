import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, RedHatDisplay_500Regular, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import Markdown from 'react-native-markdown-display';

export default function WarningBody({ title, body }) {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_500Regular,
    RedHatDisplay_700Bold,
  });

  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Markdown
        style={{
          body: styles.body, // Normal text
          strong: styles.boldText, // Bold text
        }}
      >
        {body}
      </Markdown>
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
});
