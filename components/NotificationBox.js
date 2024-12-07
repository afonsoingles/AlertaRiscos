import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Linking, AppState, Platform } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useFonts, RedHatDisplay_400Regular, RedHatDisplay_700Bold, RedHatDisplay_600SemiBold } from '@expo-google-fonts/red-hat-display';
import { requestNotificationPermission, requestCriticalAlertPermission } from '../utils/ButtonHandlers';
import * as Notifications from 'expo-notifications';
import { MaterialIcons } from '@expo/vector-icons';

const NotificationBox = ({ onPermissionsChanged }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isGranted, setIsGranted] = useState(false);
    const [isDenied, setIsDenied] = useState(false);
    const [criticalGranted, setCriticalGranted] = useState(false);
    const [criticalLoading, setCriticalLoading] = useState(false);
    const [criticalDenied, setCriticalDenied] = useState(false);

    let [fontsLoaded] = useFonts({
        RedHatDisplay_400Regular,
        RedHatDisplay_700Bold,
        RedHatDisplay_600SemiBold,
    });

    const checkPermissions = async () => {
        // Check general notification permissions
        const notificationSettings = await Notifications.getPermissionsAsync();
        const status = notificationSettings.status;

        setIsGranted(status === 'granted');
        setIsDenied(notificationSettings.canAskAgain === false);

        // Check critical alert permissions (iOS only)
        if (Platform.OS === 'ios') {
            const criticalSettings = await Notifications.getPermissionsAsync({
                ios: { allowCriticalAlerts: true },
            });
            setCriticalGranted(criticalSettings.ios?.allowsCriticalAlerts === true);
            setCriticalDenied(criticalSettings.ios?.allowsCriticalAlerts === false);
        }
    };

    useEffect(() => {
        // Initial permissions check
        checkPermissions();

        // Update permissions when app returns to foreground
        const handleAppStateChange = (nextAppState) => {
            if (nextAppState === 'active') {
                checkPermissions();
            }
        };

        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription.remove();
        };
    }, []);

    const handleButtonPress = async () => {
        if (isDenied) {
            Linking.openSettings();
        } else {
            setIsLoading(true);
            await requestNotificationPermission();
            checkPermissions(); // Recheck permissions
            setIsLoading(false);

            if (onPermissionsChanged) {
                onPermissionsChanged(isGranted);
            }
        }
    };

    const handleCriticalButtonPress = async () => {
        setCriticalLoading(true);
        const result = await requestCriticalAlertPermission();
        checkPermissions(); // Recheck permissions
        setCriticalLoading(false);

        if (onPermissionsChanged) {
            onPermissionsChanged(criticalGranted);
        }
    };

    if (!fontsLoaded) return null;

    return (
        <View style={styles.permissionsBox}>
            <View style={styles.horizontalContainer}>
                <Image
                    source={require('../assets/icons/bell.png')}
                    style={styles.icon}
                />
                <Text style={styles.text}>Permissões de Notificação</Text>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    O AlertaRiscos precisa da permissão de notificações para o avisar de riscos perto de si. 
                    Pode revogar a permissão a qualquer momento nas Definições.
                </Text>
            </View>

            <View style={[styles.horizontalContainer, { marginTop: '5%' }]}>
                <Text style={styles.optionText}>Notificações</Text>
                <TouchableOpacity
                    style={[
                        styles.optionButton,
                        isGranted ? styles.optionButtonGranted : null,
                        isDenied ? styles.optionButtonDenied : null,
                    ]}
                    onPress={handleButtonPress}
                    disabled={isGranted || isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#ff5757" />
                    ) : isGranted ? (
                        <MaterialIcons name="check" size={RFValue(18)} color="#ff5757" />
                    ) : isDenied ? (
                        <MaterialIcons name="close" size={RFValue(18)} color="#ff5757" />
                    ) : (
                        <Text style={styles.optionButtonText}>Permitir</Text>
                    )}
                </TouchableOpacity>
            </View>

            {Platform.OS === 'ios' && (
                <View style={[styles.horizontalContainer, { marginTop: '5%' }]}>
                    <Text style={styles.optionText}>Alertas Críticos</Text>
                    <TouchableOpacity
                        style={[
                            styles.optionButton,
                            criticalGranted ? styles.optionButtonGranted : null,
                            criticalDenied ? styles.optionButtonDenied : null,
                        ]}
                        onPress={handleCriticalButtonPress}
                        disabled={criticalGranted || criticalLoading}
                    >
                        {criticalLoading ? (
                            <ActivityIndicator size="small" color="#ff5757" />
                        ) : criticalGranted ? (
                            <MaterialIcons name="check" size={RFValue(18)} color="#ff5757" />
                        ) : criticalDenied ? (
                            <MaterialIcons name="close" size={RFValue(18)} color="#ff5757" />
                        ) : (
                            <Text style={styles.optionButtonText}>Permitir</Text>
                        )}
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    permissionsBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
        width: '90%',
        paddingBottom: '5%',
        paddingRight: '2%',
        alignSelf: 'center',
        marginTop: '10%',
    },
    horizontalContainer: {
        marginTop: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '2%',
    },
    icon: {
        width: RFValue(30),
        height: RFValue(30),
        marginRight: '1%',
    },
    text: {
        fontSize: RFValue(17),
        color: 'white',
        fontFamily: 'RedHatDisplay_700Bold',
    },
    descriptionContainer: {
        marginTop: '3%',
        marginLeft: '2%',
    },
    descriptionText: {
        fontSize: RFValue(14),
        color: 'white',
        fontFamily: 'RedHatDisplay_400Regular',
    },
    optionText: {
        fontSize: RFValue(15),
        color: 'white',
        fontFamily: 'RedHatDisplay_400Regular',
    },
    optionButton: {
        backgroundColor: 'white',
        borderRadius: 30,
        marginLeft: 'auto',
        marginRight: '2%',
        padding: '2%',
        paddingRight: '5%',
        paddingLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        width: RFValue(90),
        height: RFValue(30),
    },
    optionButtonGranted: {
        backgroundColor: '#e0e0e0',
    },
    optionButtonDenied: {
        backgroundColor: '#f8d7da',
    },
    optionButtonText: {
        fontSize: RFValue(12),
        color: '#ff5757',
        fontFamily: 'RedHatDisplay_600SemiBold',
    },
});

export default NotificationBox;
