import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import { StyleSheet } from 'react-native';
import CloseButton from '../../components/CloseButton';
import WarningTitle from '../../components/warningTitle';
import WarningBody from '../../components/WarningBody';

export default function FireWarning({ route }) {
  const { warningData } = route.params;

  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });
  const [titleObject, setTitleObject] = useState(null);
  const [infoDescription, setInfoDescription] = useState(null);
  const [recomendations, setRecomendations] = useState(null);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (warningData && warningData.appData) {
      const foundTitleObject = warningData.appData.find(item => item.type === 'title');
      if (foundTitleObject) {
        setTitleObject(foundTitleObject);
        console.log(foundTitleObject.content);
      }

      const infoDescription = warningData.appData.find(item => item.type === 'info');
      if (infoDescription) {
        setInfoDescription(infoDescription);
      }

      const recomendations = warningData.appData.find(item => item.type === 'recomendations');
      if (recomendations) {
        setRecomendations(recomendations);
      }

      const contacts = warningData.appData.find(item => item.type === 'contacts');
      if (contacts) {
        setContacts(contacts);
      }

    }
  }, [warningData]);

  if (!fontsLoaded || !titleObject) {
    return <View><Text>Please wait.</Text></View>;
  }

  return (
    <LinearGradient 
      colors={["#ff7f57", "#ff933b"]} 
      style={FloodStyles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={FloodStyles.scrollContainer}>
        <View style={FloodStyles.Title}>
          <WarningTitle text={titleObject.content} warningType="fire"/>
        </View>
        <View>
          {infoDescription && <WarningBody title={"Se estiver próximo do incêndio: "} body={recomendations.content}/>}
          {recomendations && <WarningBody title={"Recomendações"} body={infoDescription.content}/>}
          {contacts && <WarningBody title={"Mais informações"} body={contacts.content}/>}
          
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
