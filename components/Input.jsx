import { StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import { colors } from '../theme';
import { Image } from 'react-native-animatable'

const Input = ({imgsrc,placeholder, is_password}) => {
  return (
   <View>
    <TextInput style={styles.logininput}
     placeholder = {placeholder}
     placeholderTextColor={colors.font1}
     secureTextEntry = {is_password}/>
     </View>
  )
}

const styles = StyleSheet.create({

  logininput:{
    fontSize:14,
    marginLeft:Rh(5),
    borderWidth:Rw(0.2),
    borderColor:"black",      
    borderRadius:10,
    opacity:0.3,
    width:Rw(80),
    padding:Rh(1.7),
    
  }
})

export default Input