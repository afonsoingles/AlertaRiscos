import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DebugButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('FloodWarning', { warningType: 'flood' });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Debug"
        onPress={handlePress}
        color={styles.button.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  button: {
    color: '#007BFF',
  },
});

export default DebugButton;