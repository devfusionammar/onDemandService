import { View, Text, StatusBar, Platform, StyleSheet } from 'react-native';
import React from 'react';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';

export default function ScreenWrapper({ children ,bgcolor}) {
  const StatusbarHeight = Platform.select({
    ios: StatusBar.currentHeight || Rh(1.2),
    android: 0,
  });

  return (
    <View style={[styles.container, { paddingTop: StatusbarHeight,backgroundColor: bgcolor,  }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
