import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

const Button = ({ isButtonDisabled, text, onButtonClicked, isLoading }) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.button, isButtonDisabled && buttonStyles.disabledButton]}
      disabled={isButtonDisabled}
      onPress={onButtonClicked}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#ff5757" />
      ) : (
        <Text style={[buttonStyles.buttonText, isButtonDisabled && buttonStyles.disabledButton]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};
const buttonStyles = StyleSheet.create({
    button: {
      width: '100%',
      height: RFValue(40),
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 11,
      alignSelf: 'center',
    },
    disabledButton: {
      color: '#A63939',
      backgroundColor: '#A6A6A6',
    },
    buttonText: {
      color: '#ff5757',
      fontSize: RFValue(18),
      fontFamily: 'RedHatDisplay_300Light',
    },
  });

export default Button;