import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import { StyleSheet } from 'react-native';
import CloseButton from '../../components/CloseButton';
import WarningTitle from '../../components/warningTitle';
import WarningBody from '../../components/WarningBody';
import WarningImage from '../../components/WarningImage';

export default function EarthquakeWarning({ route }) {
  const { warningData } = route.params;

  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });
  const [titleObject, setTitleObject] = useState(null);
  const [earthquakeData, setEarthquakeData] = useState(null);
  const [afterEarthquake, setAfterEarthquake] = useState(null);

  useEffect(() => {
    if (warningData && warningData.appData) {
      const foundTitleObject = warningData.appData.find(item => item.type === 'title');
      if (foundTitleObject) {
        setTitleObject(foundTitleObject);
        console.log(foundTitleObject.content);
      }

      const earthquakeData = warningData.appData.find(item => item.type === 'earthquakeData');
      if (earthquakeData) {
        setEarthquakeData(earthquakeData);
      }

      const recomendations = warningData.appData.find(item => item.type === 'afterEarthquake');
      if (recomendations) {
        setAfterEarthquake(recomendations);
      }
    }
  }, [warningData]);

  if (!fontsLoaded || !titleObject) {
    return <View><Text>Please wait.</Text></View>;
  }

  return (
    <LinearGradient 
      colors={["#b4853e", "#80531f"]} 
      style={FloodStyles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={FloodStyles.scrollContainer}>
        <View style={FloodStyles.Title}>
          <WarningTitle text={titleObject.content} warningType="earthquake"/>
        </View>
        <View>
          <WarningImage title="Durante o Sismo" image="earthquake" />
          {afterEarthquake && <WarningBody title={"Após o Sismo"} body={afterEarthquake.content}/>}
          {earthquakeData && <WarningBody title={"Dados do Sismo"} body={earthquakeData.content}/>}
          
        </View>

        <View style={{marginBottom: 50, position: 'absolute', bottom: 0}}>
          <CloseButton />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const FloodStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  Title: {
    marginTop: 30,
  },
});
