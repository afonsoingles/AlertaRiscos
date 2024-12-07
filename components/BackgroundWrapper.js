import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BackgroundWrapper = ({ children }) => {
  const gradientColors = ['#FF5758', '#FF3c5f']; 

  return (
    <LinearGradient
      colors={gradientColors}
      style={styles.gradientContainer}
    >
      <ScrollView>
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },

});

export default BackgroundWrapper;
