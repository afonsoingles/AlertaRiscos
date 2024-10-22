import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainbarBottom = () => {
    const navigation = useNavigation();

    const handlePress = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('AboutUs')} accessible={true} accessibilityRole="button" accessibilityLabel="About">
                <Image source={require('../assets/icons/menu/info.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('Home')} accessible={true} accessibilityRole="button" accessibilityLabel="Home">
                <Image source={require('../assets/icons/menu/home.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('Prevention')} accessible={true} accessibilityRole="button" accessibilityLabel="Prevention">
                <Image source={require('../assets/icons/menu/plus.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingVertical: 10,
        gap: 30,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        tintColor: "#000",
        width: 30,
        height: 30,
    },
});

export default MainbarBottom;