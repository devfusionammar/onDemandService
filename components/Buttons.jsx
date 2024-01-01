import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Buttons = ({titleback ,titlenext, pressback,pressnext}) => {
  return (
    <View>
      <View style={{width:"100%"}}>
         
         <Text style={{backgroundColor:"#4C79BC", fontSize:20,
             alignSelf:"center", textAlign:"center", color:"white",
             marginTop:40, marginBottom:30,padding:12,borderRadius:30,
             width:"50%", elevation:5
         }}
         onPress={pressnext}>
            {titlenext}</Text>
           </View>

    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({})