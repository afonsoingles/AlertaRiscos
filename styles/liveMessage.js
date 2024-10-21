import { StyleSheet } from 'react-native';

const liveMessage_styles = StyleSheet.create({
    liveMessage: {
        backgroundColor: 'white',
        width: 350,
        height: 50,
        borderRadius: 100,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    redLiveCircle: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 100,
        marginRight: 10,
    },
    liveMessageTitle: {
        
        fontSize: 18,
        fontFamily: 'RedHatDisplay_700Bold',
    },
    divisorBar: {
        backgroundColor: 'black',
        width: 2.5,
        height: 25,
        marginRight: 5,
        borderRadius: 25,
        marginLeft: 5,
    },
    liveMessageDescription: {
        fontWeight: 'bold',
        flexShrink: 1,
        fontSize: 18,
        fontFamily: 'RedHatDisplay_700Bold',
        marginRight: 10,
    },
});

export default liveMessage_styles;
