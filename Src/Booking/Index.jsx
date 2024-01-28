import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import ServiceSelection from './ServiceSelection'
import BookingButtons from '../../components/bookingButton'
import { colors } from '../../theme'
export default function Booking({navigation}) {
  return (
    <ScreenWrapper>

    <View>
     <ServiceSelection/>
    </View>
    <BookingButtons backgroundColor={colors.ServiceProvider_buttonBackground} titlenext={'Book Now'} pressnext={()=>navigation.navigate("RecptComplete")} />
    </ScreenWrapper>
  )
}