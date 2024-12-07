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
import { account } from '../../utils/AuthManager';

const LoginScreen = ({ navigation }) => {
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


  const processLogin = async () => {
    setIsButtonLoading(true);
    setErrorMessage('');
    const loginProcess = await loginAccount(emailInput, passwordInput);
    if (loginProcess === "signedIn") {
      setIsButtonLoading(false);
      // naviagate home / do something...
    } else {
      setIsButtonLoading(false);
      console.log("Error logging in: ",loginProcess);
      switch (loginProcess) {
        case "general_argument_invalid":
          setErrorMessage("Email ou password inválidos.");
          break;
        case "user_invalid_credentials":
          setErrorMessage("Email ou password inválidos.");
          break;
        case "user_blocked":
          setErrorMessage("Utilizador bloqueado.");
          break;
        case "email_not_verified":
          // handle error -> verificar mail
          break;
        case "user_session_already_exists":
          const accountData = await account.get();
          if (accountData.emailVerification === false) {
            // handle error -> verificar mail
          } else {
            // navigate home
          }
          break;
        default:
          setErrorMessage("Ocorreu um erro inesperado. Por favor, tente novamente ou contacte o suporte.");
          setTimeout(() => {setErrorMessage('');}, 3500);
          break;
      }
    }
  };

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <HeaderBig subtitle="Iniciar Sessão" />
        <View style={styles.inputContainers}>
          <InputBox placeholder='Email' icon={require('../../assets/icons/email.png')} onChangeText={(text) => setEmailInput(text)} />
          <InputBox placeholder='Password' icon={require('../../assets/icons/password.png')} isPassword={true} onChangeText={(text) => setPasswordInput(text)} />
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


export default LoginScreen;
