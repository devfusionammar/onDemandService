import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import ServiceSelection from './ServiceSelection'

export default function Booking() {
  return (
    <ScreenWrapper>
    <View>
     <ServiceSelection/>
    </View>
    </ScreenWrapper>
  )
}