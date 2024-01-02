import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
const BookingButtons = ({ titleback, titlenext, pressback, pressnext, backgroundColor }) => {
  return (
    <View>
      <View style={{ width: '100%' }}>
        <TouchableOpacity
          onPress={pressnext}
          style={{
            backgroundColor: backgroundColor,
            fontSize: 20,
            
          }}>
            <Text style={{color:'white'}}>
          {titlenext}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingButtons;

const styles = StyleSheet.create({});
