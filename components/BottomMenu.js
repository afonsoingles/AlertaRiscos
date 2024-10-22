import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomMenu = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigation('About')}>
        <Image source={require('../assets/icons/info.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Home')}>
        <Image source={require('../assets/icons/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation('Prevention')}>
        <Image source={require('../assets/icons/prevention.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default BottomMenu;
