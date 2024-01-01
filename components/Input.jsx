import { StyleSheet, Text,TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'

const Input = ({imgsrc,placeholder, is_password}) => {
  return (
   <View>
    <TextInput style={styles.logininput}
     placeholder = {placeholder}
     placeholderTextColor={'white'}
     secureTextEntry = {is_password}/>
     </View>
  )
}

const styles = StyleSheet.create({

  logininput:{
    fontSize:16,
    marginTop:10,
    borderWidth:2,
    borderColor:"black",      
    borderRadius:30,
    opacity:0.6,
    width:"100%",
    padding:5,
    textAlign:"center"
  }
})

export default Input