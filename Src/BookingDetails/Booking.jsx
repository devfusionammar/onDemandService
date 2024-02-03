import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors } from '../../theme';
import AllBooking from './AllBooking';
import Completed from './completed';
import Upcmming from './Upcomming';
import Inprogress from './Inprogress';
import BookingDetails from '../../components/bookingDetails';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as Rf,
} from 'react-native-responsive-dimensions';
import { getAllBooking } from '../../services/bookingconfrm';
export default function Booking() {
  const [selectedTab, setSelectedTab] = useState('All');
  const handleTabPress = (tab) => {
    console.log(tab);
    setSelectedTab(tab);
  };
//   useEffect(() => {
//     async function fetchData() {
//         try {
//             const data = await getAllBooking();
//             console.log('Fetched data:', data);
//             setBannerData(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
//     fetchData();
// }, []);
  return (
    <ScreenWrapper>
      <View style={styles.titleContainer}>
        <Text style={{color:'black'}}>Booking</Text>
      </View>
      <View style={styles.buttonContainer}>
        
        <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
          title={"All"}
          pressnext={() => handleTabPress('All')}
          
        />
        <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
         title={"UpComming"}
         pressnext={() => handleTabPress('Upcomming')}
         
       />
       <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
         title={"Completed"}
         pressnext={() => handleTabPress('Completed')}
         
       />
        <BookingDetails
         backgroundColor={colors.ServiceProvider_buttonBackground}
         title={"Pending"}
         pressnext={() => handleTabPress('Inprogress')}
         
       />
      </View>
      {/* Render different components based on selected tab */}
      {selectedTab === 'All' && <AllBooking />}
      {selectedTab === 'Completed' && <Completed />}
      {selectedTab === 'Upcomming' && <Upcmming />}
      {selectedTab === 'Inprogress' && <Inprogress/>}
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
    height: Rw(15),
    width: '100%',
  },
});
