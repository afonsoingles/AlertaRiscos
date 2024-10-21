import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, RedHatDisplay_700Bold } from '@expo-google-fonts/red-hat-display';
import { StyleSheet } from 'react-native';
import CloseButton from '../../components/CloseButton';
import WarningTitle from '../../components/warningTitle';
import WarningBody from '../../components/WarningBody';

export default function MaxFireRisc({ navigation }) {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
  });

  return (
    <LinearGradient 
      colors={["#57a4ff", "#3b4fff"]} 
      style={FloodStyles.container}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={FloodStyles.scrollContainer}>
        <View style={FloodStyles.Title}>
          <WarningTitle text="Atenção, Chuvas Fortes!" warningType="flood"/>
        </View>
        <View>
          <WarningBody title="Informação" body="O IPMA prevê mau tempo para os próximos dias um texto bué longo etc etc etc la la ala lalajgdfghdjhg fgsdgfsdg"/>
          <WarningBody title="Recomendações" body={`- Evite atravessar zonas inundadas, de modo a precaver o arrastamento de pessoas ou viaturas para buracos no pavimento ou caixas de esgoto abertas.\n- Tenha especial cuidado ao circular junto da orla costeira e zonas ribeirinhas historicamente mais vulneráveis a inundações rápidas.
        \n- Garanta a desobstrução dos sistemas de escoamento das águas pluviais e retire inertes e outros objetos que possam ser arrastados ou criem obstáculos ao livre escoamento das águas.
        \n- Adote uma condução defensiva, reduzindo a velocidade e tendo especial cuidado com a possível formação de lençóis de água nas vias.
        \n- Não utilize o telefone enquanto conduz, para evitar distrações.
        \n- Mantenha-se informado através dos meios de comunicação social ou dos sítios da internet das entidades oficiais, sobre a evolução das condições meteorológicas e as medidas de prevenção e proteção civil a adotar.
        \n- Tenha em atenção as informações e recomendações da Proteção Civil e Forças de Segurança.
        \n- Se notar alguma situação que possa representar perigo, contacte as autoridades competentes.\n
        \n- Em caso de emergência ligue 112.
        `} />
        
        </View>

        <View style={{marginTop: 50, marginBottom: 50}}>
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
