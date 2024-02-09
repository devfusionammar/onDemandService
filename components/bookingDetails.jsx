import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
    margin:Rw(2.3)
    
  },
  buttonText: {
    marginTop:Rh(1.3),
    textAlign: 'center',
    color: 'white',
    fontSize: Rf(1.6),
  },
});
export default BookingDetails;