// Import necessary components and libraries
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';

const CurrentLocation = () => {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus('You are Here');
        setCurrentLongitude(JSON.stringify(position.coords.longitude));
        setCurrentLatitude(JSON.stringify(position.coords.latitude));
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        saveLocationToStorage(currentLatitude, currentLongitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        setCurrentLongitude(JSON.stringify(position.coords.longitude));
        setCurrentLatitude(JSON.stringify(position.coords.latitude));
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        saveLocationToStorage(currentLatitude, currentLongitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        distanceFilter: 10
      },
    );
  };

  const saveLocationToStorage = async (latitude, longitude) => {
    try {
      await AsyncStorage.setItem('latitude', latitude);
      await AsyncStorage.setItem('longitude', longitude);
      console.log('Updated location');
    } catch (error) {
      console.error('Error saving location to AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
          
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.boldText}>
            {locationStatus}
          </Text>
          <Text style={styles.locationText}>
            Longitude: {currentLongitude}
          </Text>
          <Text style={styles.locationText}>
            Latitude: {currentLatitude}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Refresh Location"
              onPress={getOneTimeLocation}
            />
          </View>
        </View>
        <Text style={styles.footerText}>
          React Native Geolocation
        </Text>
        <Text style={styles.footerText}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
    textAlign: 'center'
  },
  locationText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    color:'black',
  },
  buttonContainer: {
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginTop: 10,
  },
});

export default CurrentLocation;


// import { View, Text, StyleSheet,Image,Platform } from 'react-native';
// import React from 'react';
// import ScreenWrapper from '../../components/ScreenWrapper';
// import BackButton from '../../components/backbutton';
// import { colors } from '../../theme';
// import {
//   responsiveHeight as Rh,
//   responsiveScreenWidth as Rw,
//   responsiveScreenFontSize as fo,
// } from 'react-native-responsive-dimensions';
// import Buttons from '../../components/Buttons';
// import SearchBar from './MapSearchBar';
// export default function CurrentLocation({navigation}) {
//   return (
//     <ScreenWrapper bgcolor={colors.background} >
      
//       <View style={styles.contentContainer}>
//         <BackButton marginRight1={2} marginLeft1={8}  onpress={()=>navigation.navigate('BottomNavigation')}/>
//         <View style={styles.textContainer}>
//           <SearchBar/>
//         </View>
       
//       </View>
//       <View  style={{height:Rh(4),width:Rw(4),marginLeft:Rw(9),marginTop:Rh(5)}}>
//       <Image style={{height:Rh(60),width:Rw(80)}} source={require('../../assets/Location/currentlocation.png')}/>
//       </View>
     
//         <View style={styles.buttoncontainer}>
//         <Buttons titlenext={"Countinue"}backgroundColor1={colors.headerbackground} pressnext={()=>navigation.navigate('BottomNavigation')} />
        

//         </View>
//     </ScreenWrapper>
//   );
// }

// const styles = StyleSheet.create({
  
//   contentContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     ...Platform.OS === 'android' ? { marginTop: Rh(5) } : {}
    
//   },
//   textContainer: {
//     marginRight: 150,
    
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: fo(2.3),
//     color:colors.fontSubheadin
//   },
//   textEnablelocation: {
//     textAlign: 'center',
//     fontSize: fo(2.3),
//     marginTop:Rh(35),
//     fontFamily:colors.fontfaimly_heding,
//     color:colors.font1
//   },
// buttoncontainer:{
//     marginTop:Rh(64),
//     marginLeft:Rw(25),
//     marginRight:Rw(25),
   
// }
// });
