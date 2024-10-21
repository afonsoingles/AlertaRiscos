import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MainAlertsBox() {
  return (
    <View style={styles.alertBox}>
      {/* Tab Label with Gradient Border */}
      <LinearGradient
        colors={['#ff0000', '#ff9100']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.tabLabel}>
          <Text style={styles.tabLabelText}>Alertas Principais</Text>
        </View>
      </LinearGradient>

      {/* Alert Content */}
      <View style={styles.alertContent}>
        <Text style={styles.alertText}>min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertBox: {
    minWidth: 350,
    minHeight: 100,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  gradientBorder: {
    position: 'absolute',
    top: -25, // Position the gradient border correctly above the alertBox
    borderRadius: 20,
    padding: 2, // Adjust padding to simulate the border width
  },

  tabLabel: {
    backgroundColor: '#ffffff', // The inner white background
    borderRadius: 18, // A bit smaller than the gradient border
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  tabLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  alertContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
