import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors } from '../../theme';
import AllBooking from './AllBooking';
import BookingDetails from '../../components/bookingDetails';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as Rf,
} from 'react-native-responsive-dimensions';
export default function Booking() {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <ScreenWrapper>
      <View style={styles.titleContainer}>
        <Text style={{color:'black'}}>Booking</Text>
      </View>
      <View style={styles.buttonContainer}>
        
        <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
          title={"All"}
          onPress={() => handleTabPress('All')}
          
        />
        <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
         title={"UpComming"}
         onPress={() => handleTabPress('UpComming')}
         
       />
       <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
         title={"Completed"}
         onPress={() => handleTabPress('Completed')}
         
       />
        <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
         title={"Inprogress"}
         onPress={() => handleTabPress('Inprogress')}
         
       />
      </View>
      {/* Render different components based on selected tab */}
      {selectedTab === 'All' && <AllBooking />}
      {selectedTab === 'Completed' && <AllBooking />}
      {/* Render other components for different tabs */}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.headerbackground,
    height: Rw(12),
    width: '100%',
  },
});
