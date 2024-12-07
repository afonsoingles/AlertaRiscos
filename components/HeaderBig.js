import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import HeaderImage from '../assets/logos/banner.png';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useFonts, RedHatDisplay_400Regular, RedHatDisplay_700Bold, RedHatDisplay_600SemiBold } from '@expo-google-fonts/red-hat-display';

const HeaderBig = ({ subtitle }) => {
    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
        RedHatDisplay_700Bold,
        RedHatDisplay_600SemiBold,
    });

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container}>
            <Image 
                source={HeaderImage} 
                style={styles.image} 
            />
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        marginTop: RFValue(30),
        maxWidth: RFValue(320),
        marginBottom: RFPercentage(5),
        height: RFValue(100),
        resizeMode: 'contain',
    },
    subtitle: {
        position: 'absolute',
        bottom: RFValue(20),
        fontSize: RFValue(20),
        color: '#fff',
        fontFamily: 'RedHatDisplay_600SemiBold'
    },
});

export default HeaderBig;