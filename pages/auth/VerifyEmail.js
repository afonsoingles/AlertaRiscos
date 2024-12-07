import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import BackgroundWrapper from '../../components/BackgroundWrapper';
import HeaderBig from '../../components/HeaderBig';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useFonts, RedHatDisplay_400Regular, RedHatDisplay_700Bold, RedHatDisplay_600SemiBold, RedHatDisplay_300Light } from '@expo-google-fonts/red-hat-display';
import InputBox from '../../components/InputBox';
import Button from '../../components/Button';
import { loginAccount } from '../../utils/ButtonHandlers';
import ErrorMessage from '../../components/ErrorMessage';

const Setup = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_700Bold,
    RedHatDisplay_600SemiBold,
  });

  
  
  if (!fontsLoaded) return null;




  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <HeaderBig subtitle="Verificar Email" />
        <View style={styles.inputContainers}>
          <InputBox placeholder='Email' icon={require('../../assets/icons/email.png')} onChangeText={(text) => setEmailInput(text)} />
        </View>
        <View style={styles.submitButton}>
          <Button 
            text={isButtonLoading ? "" : "Entrar"} 
            onButtonClicked={() => !isButtonLoading && processLogin()} 
            isLoading={isButtonLoading} 
            isButtonDisabled={isButtonLoading}
          />
        </View>
        <View style={{ marginTop: RFPercentage(2.5)}}>
          <ErrorMessage isVisible={true} text={errorMessage}/>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainers: {
    marginTop: RFValue(30),
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    gap: RFValue(15),
  },
  submitButton: {
    marginTop: RFValue(35),
    width: '85%',
    alignSelf: 'center',
  },
});


export default Setup;
