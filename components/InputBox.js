import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const InputBox = ({ placeholder, value, onChangeText, icon, isPassword }) => {
    return (
        <View style={styles.inputContainer}>
            <Image
                source={icon}
                style={styles.icon}
            />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isPassword}
                autoComplete='off'
                textContentType='none'
                autoCapitalize="none"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.32)', 
        borderRadius: RFValue(10),
        paddingHorizontal: RFValue(15), 
        paddingVertical: RFValue(10), 
         
    },
    icon: {
        width: RFValue(25), 
        height: RFValue(25),
        marginRight: RFValue(10), 
        alignSelf: 'center', 
        
    },
    input: {
        flex: 1,
        fontSize: RFValue(16), 
        color: 'white', 
        fontFamily: 'RedHatDisplay_400Regular', 
        placeholderTextColor: 'rgba(255, 255, 255, 0.32)',
    },
});

export default InputBox;
