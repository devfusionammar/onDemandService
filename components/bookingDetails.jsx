import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { colors } from '../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as Rf,
} from 'react-native-responsive-dimensions';
const BookingDetails = ({ title, pressnext, backgroundColor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={pressnext}
        style={[styles.button, { backgroundColor }]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  button: {
   
    height: Rh(4),
    width: Rw(20),
    margin:Rw(2.3),
    borderRadius:Rw(1),
  },
  buttonText: {
    marginTop: Platform.OS === 'android' ? Rh(0.3) : Rh(1),
    textAlign: 'center',
    color: 'black',
    fontSize: Rf(1.6),
  },
});
export default BookingDetails;