import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
const Buttons = ({ titleback, titlenext, pressback, pressnext, backgroundColor1 ,fontcolor}) => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: backgroundColor1, width: Rw(49),height:Rh(5),borderRadius: Rw(20),
        borderWidth: 1, borderColor: "red",}}
      >
        <View >
          <Text
            style={{
             
              fontSize: fo(2),
              
              textAlign: 'center',
              color: fontcolor,
              paddingTop:Rh(1)       
              
            }}
            onPress={pressnext}
          >
            {titlenext}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
