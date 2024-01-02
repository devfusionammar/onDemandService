import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { colors } from '../../theme'
import Buttons from '../../components/button'
import BookingButtons from '../../components/bookingButton'
import AllBooking from './AllBooking'


export default function Booking() {
  return (
    <ScreenWrapper className="" style={{flex:1,backgroundColor:'black'}}>
    <View className="flex-row justify-center items-center  mt-4">
      <Text className="text-center text-xl text-black">Booking</Text>
      
      
     </View>
      <View className="flex-row justify-between items-center  mt-4 h-16  p-4" style={styles.button_container}>
      <BookingButtons backgroundColor={colors.headerbackground } titlenext={"All"}/>
      <BookingButtons backgroundColor={colors.headerbackground } titlenext={"Upcoming"}/>
      <BookingButtons backgroundColor={colors.headerbackground } titlenext={"Completed"}/>
      <BookingButtons backgroundColor={colors.headerbackground } titlenext={"In progress"}/>
      </View>
  <AllBooking/>
    </ScreenWrapper>
  )
}
const styles=StyleSheet.create({

  button_container:{
    backgroundColor:`${colors.headerbackground}`,
    width:"100%"
  }



})