import { View, Text } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'

export default function Profile() {
  return (
    <ScreenWrapper className="flex-1 bg-slate-500">
    <View className="flex-row justify-center items-center bg-slate-500 ">
      <Text className="text-center text-7xl text-pink-400">Profile</Text>
    </View>
    </ScreenWrapper>
  )
}