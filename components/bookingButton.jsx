import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as Rf,
} from 'react-native-responsive-dimensions';
const BookingButtons = ({ titlenext, pressnext, backgroundColor }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={pressnext}
        style={[styles.button, { backgroundColor }]}>
        <Text style={styles.buttonText}>{titlenext}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 0, // Adjust padding as needed
    paddingBottom:0, // Adjust padding as needed
    
  },
  button: {
    borderRadius: 10, // Adjust the border radius for rounded corners
    paddingVertical: 15, // Adjust the vertical padding for height
    paddingHorizontal:Rw(35) , // Adjust the horizontal padding for width
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

<<<<<<< HEAD
export default BookingButtons;
=======
export default BookingButtons;
>>>>>>> b84e56726a06f0a53ffc036889683f60a0be0e32
