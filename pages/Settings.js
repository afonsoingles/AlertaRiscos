import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import MainbarBottom from '../components/MainbarBottom';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import municipalitiesData from '../assets/files/municipalities.json';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import debounce from 'lodash.debounce';
import { LogLevel, OneSignal } from 'react-native-onesignal';

export default function Settings() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
    RedHatDisplay_400Regular,
  });

  const [showInfo, setShowInfo] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredMunicipalities, setFilteredMunicipalities] = useState([]);
  const [checkedMunicipalities, setCheckedMunicipalities] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    const loadCheckedMunicipalities = async () => {
      try {
        const savedCheckedMunicipalities = await AsyncStorage.getItem('checkedMunicipalities');
        if (savedCheckedMunicipalities) {
          setCheckedMunicipalities(JSON.parse(savedCheckedMunicipalities));
        }
      } catch (error) {
        console.error('Failed to load checked municipalities:', error);
      }
    };

    loadCheckedMunicipalities();
  }, []);



  const handleSearch = useCallback(
    debounce((text) => {
      if (text) {
        const filtered = municipalitiesData.filter(municipio =>
          municipio.value.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredMunicipalities(filtered);
      } else {
        setFilteredMunicipalities([]);
      }
    }, 300),
    []
  );

  const handleCheckBoxChange = async (municipioName) => {
    const newCheckedMunicipalities = {
      ...checkedMunicipalities,
      [municipioName]: !checkedMunicipalities[municipioName]
    };
    setCheckedMunicipalities(newCheckedMunicipalities);

    try {
      await AsyncStorage.setItem('checkedMunicipalities', JSON.stringify(newCheckedMunicipalities));
    } catch (error) {
      console.error('Failed to save checked municipalities:', error);
    }
  };

  useEffect(() => {
    const updateSubscriptions = async () => {
      for (const [municipioName, isChecked] of Object.entries(checkedMunicipalities)) {
        if (isChecked) {
          OneSignal.User.addTag(municipioName, "subscribed");
        } else {
          OneSignal.User.addTag(municipioName, "unsubscribed");
        }
      }
    };

    updateSubscriptions();
  }, [checkedMunicipalities]);

  return (
    <LinearGradient
      colors={["#ff5757", "#ff3b5f"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image style={styles.logoBanner} source={require('../assets/images/AlertaRiscosBanner.png')} />
        <Text style={styles.titleText}>Definições</Text>

        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} onPress={() => setShowInfo(!showInfo)}>
            <MaterialIcons name="info" size={24} color="#fff" />
            <Text style={styles.sectionTitle}>Informações</Text>
            <MaterialIcons name={showInfo ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="#fff" />
          </TouchableOpacity>
          {showInfo && (
            <Text style={styles.sectionContent}>{"O AlertaRiscos é uma aplicação desenvolvida para alertar os seus utilizadores em caso de catástrofes naturais perto de si.\n\nA aplicação foi desenvolvida com o intuito de ajudar a população a prevenir e a reagir a situações de emergência, fornecendo informações úteis e alertas em tempo real."}</Text>
          )}
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionHeader} onPress={() => setShowNotifications(!showNotifications)}>
            <MaterialIcons name="notifications" size={24} color="#fff" />
            <Text style={styles.sectionTitle}>Notificações</Text>
            <MaterialIcons name={showNotifications ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="#fff" />
          </TouchableOpacity>
          {showNotifications && (
            <View style={styles.notificationContent}>
              <View style={styles.searchBox}>
                <MaterialIcons name="search" size={20} color="#ff3b5f" />
                <TextInput
                  placeholder="Pesquise pelo Município"
                  style={styles.searchInput}
                  value={search}
                  onChangeText={(text) => {
                    setSearch(text);
                    handleSearch(text);
                  }}
                />
              </View>
              <View style={styles.municipioList}>
                {filteredMunicipalities.map((municipio, index) => (
                  <View key={index} style={styles.municipioItem}>
                    <CheckBox
                      tintColors={{ true: '#fff', false: '#fff' }}
                      value={checkedMunicipalities[municipio.key] || false}
                      onValueChange={() => handleCheckBoxChange(municipio.key)}
                    />
                    <Text style={styles.municipioText}>{municipio.value.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: '5%' }}>
          <MainbarBottom navigation={navigation} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'RedHatDisplay_700Bold',
    marginTop: 10,
  },
  logoBanner: {
    marginTop: 30,
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  section: {
    backgroundColor: '#ff6f6f',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'RedHatDisplay_700Bold',
    flex: 1,
    marginLeft: 10,
  },
  sectionContent: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'RedHatDisplay_400Regular',
  },
  notificationContent: {
    marginTop: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe5e5',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#ff3b5f',
    flex: 1,
  },
  municipioList: {
    backgroundColor: '#ff6f6f',
    borderRadius: 10,
    padding: 10,
  },
  municipioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ff3b5f',
    paddingVertical: 10,
  },
  municipioText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});
