import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import NotificationBox from '../components/NotificationBox';
import BackgroundWrapper from '../components/BackgroundWrapper';
import HeaderBig from '../components/HeaderBig';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useFonts, RedHatDisplay_400Regular, RedHatDisplay_700Bold, RedHatDisplay_600SemiBold, RedHatDisplay_300Light } from '@expo-google-fonts/red-hat-display';
import { useNavigation } from '@react-navigation/native';
const Setup = ({ }) => {

  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_700Bold,
    RedHatDisplay_600SemiBold,
  });

  
  
  if (!fontsLoaded) return null;

  const isButtonDisabled = !(1);

  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <HeaderBig subtitle="Bem-vindo" />
        <NotificationBox />
        <View style={styles.AlignBottom}>
          <TouchableOpacity
            style={[buttonStyles.button, isButtonDisabled && buttonStyles.disabledButton]}
            disabled={isButtonDisabled}
          >
            <Text style={[buttonStyles.buttonText, isButtonDisabled && buttonStyles.disabledButton]}>Criar Conta</Text>
          </TouchableOpacity>
          {!isButtonDisabled && (
            <View style={{ marginTop: RFValue(3) }} id="loginBottomSetup">
              <Text
                style={{
                  color: 'white',
                  fontSize: RFValue(14),
                  fontFamily: 'RedHatDisplay_300Light',
                  textAlign: 'center',
                }}
              >
                Já tem conta?{' '}
                <Text
                  style={{ color: '#ffde59', textDecorationLine: 'underline' }}
                  onPress={() => navigation.navigate('AuthRoutes', { screen: 'Login' })}
                  suppressHighlighting={true}
                >
                  Inicie Sessão
                </Text>
              </Text>
            </View>
          )}
        </View>

 
      </View>
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AlignBottom: {
    position: 'relative',
    marginTop: Platform.OS === 'android' ? RFPercentage(40) : RFPercentage(25),
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    width: '90%',
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

export default Setup;
