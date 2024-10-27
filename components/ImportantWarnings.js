import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as Device from 'expo-device';
import { useNavigation } from '@react-navigation/native';

export default function ImportantAlerts() {
  const baseUrl = process.env.API_URL ;
 
  

  const [alerts, setAlerts] = React.useState([]);

  React.useEffect(() => {
    const fetchAlerts = () => {
      fetch(`${baseUrl}/warnings/active`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-AlertaRiscos-Key': 'ALERTARISCOS.PT_2@25_74645HFgf5r6'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("Updated alerts for device: ", Device.modelName);
          
            const formattedAlerts = data.map(alert => ({
            id: alert.warningID,
            icon: getIconForWarningType(alert.warningType),
            title: alert.warningTitle,
            data: alert,
            }));
          setAlerts(formattedAlerts);
        })
        .catch(error => console.warn("Something went wrong! Cant fetch alerts: ", error));
    };

    fetchAlerts();
    const intervalId = setInterval(fetchAlerts, 30000); 

    return () => clearInterval(intervalId); 
  }, []);

  const getIconForWarningType = (warningType) => {
    switch (warningType) {
      case 'heavyRain':
        return require('../assets/icons/rainy.png');
      case 'flood':
        return require('../assets/icons/flood.png');
      case 'earthquake':
        return require('../assets/icons/earthquake.png');
      case 'fire':
        return require('../assets/icons/fire.png');
      case 'nuclear':
        return require('../assets/icons/nuclear.png');
      default:
        return require('../assets/icons/test.png');
    }
  };

  const navigation = useNavigation();
  let alertBoxHeightAdd;

  if (alerts.length === 0) {
    alertBoxHeightAdd = 90;
  } else {
    alertBoxHeightAdd = 30;
  }
  
  const alertBoxHeight = alertBoxHeightAdd + alerts.length * 60;
  const processWarning = (data) => {
    data = data.data;
    console.log("Processing warning: ", data);
    if (data.warningType === 'flood') {
      navigation.navigate('FloodWarning', { warningData: data });
    }
    else if (data.warningType === 'heavyRain') {
      navigation.navigate('HeavyRainWarning', { warningData: data });
    }
    else if (data.warningType === 'earthquake') {
      navigation.navigate('EarthquakeWarning', { warningData: data });
    }
    else if (data.warningType === 'fire') {
      navigation.navigate('FireWarning', { warningData: data });
    }
    else if (data.warningType === 'nuclear') {
      navigation.navigate('NuclearWarning', { warningData: data });
    }
    else if (data.warningType === 'test') {
      navigation.navigate('TestWarning', { warningData: data });
    }
    else {
      console.warn("Unknown warning type: ", data.warningType);
    }
  };


  return (
    <View style={[styles.alertBox, { height: alertBoxHeight }]}>
      
      <LinearGradient
        colors={['#ff0000', '#ff9100']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.tabLabelGradient}
      >
        <View style={styles.tabLabel}>
          <Text style={styles.tabLabelText}>Avisos Importantes</Text>
        </View>
      </LinearGradient>

      
      <View style={[styles.alertContent, { height: alertBoxHeight, marginTop: alerts.length === 0 ? 5 : 25 }]}>
        {alerts.length === 0 ? (
          <Text style={styles.noAlertsText}>Não há avisos</Text>
        ) : (
          alerts.map(alert => (
            <AlertRow key={alert.id} id={alert.id} icon={alert.icon} title={alert.title} numberOfLines={1} data={alert} ellipsizeMode="tail" processWarning={processWarning} />
          ))
        )}
      </View>
    </View>
  );
}

const AlertRow = ({ icon, title, data, processWarning }) => {
  const [disabledButtons, setDisabledButtons] = React.useState({});

  const handlePress = (id, data) => {
    setDisabledButtons(prevState => ({ ...prevState, [id]: true }));
    setTimeout(() => {
      setDisabledButtons(prevState => ({ ...prevState, [id]: false }));
    }, 1000);
    processWarning(data);
  };

  return (
    <View style={styles.alertRow}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handlePress(data.id, data)}
        disabled={disabledButtons[data.id]}
      >
        <LinearGradient
          colors={['#ff0000', '#ff9100']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.moreInfoButton}
        >
          <Text style={styles.moreInfoText}>Ver mais</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  alertBox: {
    marginTop: 50,
    minWidth: '90%',
    maxWidth: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },

  tabLabelGradient: {
    position: 'absolute',
    top: -25,
    padding: 2, 
    borderRadius: 20,
  },

  tabLabel: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },

  tabLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },

  alertContent: {
    marginTop: 25,
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, 
    width: '100%', 
  },

  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  
  descriptionContainer: {
    flex: 1,
    marginLeft: 10, 
    marginRight: 10,
  },

  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },

  moreInfoButton: {
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  moreInfoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  noAlertsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
