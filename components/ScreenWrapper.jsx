import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function ScreenWrapper({ children }) {
  const Statusbar = Platform.select({
    ios: StatusBar.currentHeight || 30, // Default to 30 if currentHeight is undefined
    android: 0, // No padding on Android
  });

  return (
    <View style={{ paddingTop: Statusbar }}>
      {children}
    </View>
  )
}
