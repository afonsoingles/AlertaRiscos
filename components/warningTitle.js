import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';


const WarningTitle = ({ text, warningType }) => {
    const [fontsLoaded] = useFonts({
        RedHatDisplay_700Bold,
    });

    let imageSource;

    switch (warningType) {
        case 'fire':
            imageSource = require("../assets/icons/fire.png");
            break;
        case 'flood':
            imageSource = require("../assets/icons/flood.png");
            break;
        case 'earthquake':
            imageSource = require("../assets/icons/earthquake.png");
            break;
        case 'nuclear':
            imageSource = require("../assets/icons/nuclear.png");
            break;
        case 'heavyRain':
            imageSource = require("../assets/icons/raindrop.png");
            break;
        default:
            imageSource = require("../assets/icons/test.png");
            break;
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSource}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

WarningTitle.propTypes = {
    text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
        resizeMode: 'contain',
        tintColor: '#fff',
    },
    text: {
        fontSize: 30,
        color: '#fff',
        fontFamily: 'RedHatDisplay_700Bold',
        width: '70%',
    
    
    },
});

export default WarningTitle;