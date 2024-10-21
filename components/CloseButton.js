import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const CloseButton = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Home');
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress} accessible={true} accessibilityRole="button" accessibilityLabel="Close">
            <Text style={styles.buttonText}>Fechar</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 45,
        alignSelf: 'center', // Center horizontally
        marginTop: 'auto', // Center vertically
        marginBottom: 'auto', // Center vertically
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CloseButton;