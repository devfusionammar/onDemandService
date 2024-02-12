import React from 'react';
import { useState,useEffect } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors } from '../../theme';
import { responsiveHeight as Rh, responsiveScreenWidth as Rw, responsiveScreenFontSize as fo } from 'react-native-responsive-dimensions';
import RecptButton from '../../components/RecptButton';
import { useWindowDimensions } from 'react-native';
import { bookingReciptDetails } from '../../services/bookingconfrm';
import moment from 'moment';
const RecptComplete = () => {
  const [reciptBooking,setReciptBooking]=useState(null)
  console.log(reciptBooking?.Services[0]?.ServiceTypes.map(service => service.Name));
  const formattedTime = moment(reciptBooking?.booking?.BookingTime?.Time).format('hh:mm A');
  const formattedDate = moment(reciptBooking?.booking?.BookingTime?.Date).format('ddd, DD MMM YYYY');
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    async function fetchData() {
        try {
            const data = await bookingReciptDetails('65c3b531bc603a62db454a69');
           
            setReciptBooking(data);
       
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    }
    
    fetchData();
}, []);

  const renderServiceItem = (title, price) => (
    <View style={{ backgroundColor: colors.ServiceProvider_buttonBackground, height: Rh(5), width: Rh(38), marginTop: Rh(0.1) }}>
      <Text style={{ fontSize: fo(2), marginTop: Rw(2.5), color: colors.background, marginLeft: Rw(6) }}>{title}</Text>
      <View><Text style={{ fontSize: fo(2), marginTop: Rw(-5.5), color: colors.background, marginLeft: Rw(60) }}>Pkr {price}</Text></View>
    </View>
  );

  const useStyles = () => {
    const { width, height } = useWindowDimensions();
    // Add your style calculations here if needed
  }

  const styles = useStyles();

  return (
    <ScreenWrapper>
      <View>
        <Text style={{ fontFamily: colors.fontfaimly_heding, textAlign: 'center', fontSize: fo(3), fontWeight: 'bold', color: colors.heading, marginTop: Rh(4) }}>Receipt</Text>
      </View>
      {/* ServiceProvider Section */}
      <View style={{ flexDirection: 'row' }}>
        {[  { uri: `data:image/png;base64,${reciptBooking?.booking?.Beautician?.ProfiePhoto}` },,
        
        { image: require('../../assets/popularServiceProvider/ayeshawomen.png') },
        ].map((item, index) => (
          <View key={index} style={{ marginTop: index === 0 ? Rh(4) : index === 1 ? Rh(5) : Rh(1), width: index === 1 ? 0 : Rw(7), marginLeft: item.marginLeft }}>
            <Image source={item.image} style={{ ...item.style }} />
          </View>
        ))}

        <View style={{ flexDirection: 'row', marginTop: Rh(4), borderStyle: 'dashed', borderColor: colors.font1, borderWidth: Rw(0.4), height: Rh(10), width: Rw(60), marginHorizontal: Rw(21), borderTopRightRadius: Rw(5), borderBottomRightRadius: Rw(5), overflow: 'hidden' }}>
          <View>
            <Text style={{ fontSize: fo(2), fontWeight: 'bold', marginTop: Rw(1), color: colors.font1, marginLeft: Rw(7) }}>{reciptBooking?.booking?.Beautician?.Username}</Text>
            <Text style={{ fontSize: fo(2), fontWeight: 'bold', marginTop: Rw(0.1), color: colors.heading, marginLeft: Rw(8) }}>{reciptBooking?.booking?.Beautician?.PhoneNo}</Text>
            {/* <Image source={require('../../assets/Icons/star.png')} style={{ marginTop: Rw(0.2), marginLeft: Rw(4.3), width: Rw(4.5) }} /> */}
            {/* <Text style={{ fontSize: fo(1.7), fontWeight: 'bold', marginTop: Rw(-3.7), color: colors.font1, marginLeft: Rw(9) }}>4.9</Text>
            <Text style={{ fontSize: fo(1.7), fontWeight: 'bold', marginTop: Rw(-5), color: colors.heading, marginLeft: Rw(14.5) }}>(27)</Text> */}
          </View>
        </View>
      </View>

      {/* Date and Time Section */}
      {[{ title: `Date: ${formattedDate}` }, { title: `Time: ${formattedTime}` }].map((item, index) => (
        <View key={index} style={{ elevation: Platform.OS === 'android' ? 5 : undefined, marginLeft: Rw(11), backgroundColor: colors.ServiceProvider_buttonBackground, height: Rh(5), width: Rh(36), borderRadius: Rw(1), marginTop: index === 1 ? Rh(2) : Rh(0) }}>
          <Text style={{ borderColor: colors.background, borderWidth: Rw(0.5), fontSize: fo(2), marginTop: Rw(1.9), color: colors.font1, marginLeft: Rw(2), marginRight: Rw(2), textAlign: 'center' }}>{item.title}</Text>
        </View>
      ))}

      {/* Pricing Section */}
      <View style={{ marginTop: Rh(2), marginLeft: Rw(7), width: Rw(85), height: Rh(37), borderWidth: Rw(2), borderColor: colors.background }}>
  <View style={{ backgroundColor: colors.headerbackground, height: Rh(5), width: Rh(38) }}>
    <Text style={{ fontSize: fo(2), marginTop: Rw(2.5), color: colors.background, marginLeft: Rw(6) }}>Pricing</Text>
  </View>
  {reciptBooking?.booking?.Service?.map((service, index) => (
    <React.Fragment key={service._id}>
      {service?.ServiceTypes?.map((item, index) => (
        <React.Fragment key={item._id}>
          {renderServiceItem(item.Name, item.Price)}
        </React.Fragment>
      ))}
    </React.Fragment>
  ))}
</View>



      {/* Total Time, Subtotal, Coupon Discount, and Total Section */}
      <View style={{ flexDirection: "row", marginTop: Rh(1.5) }}>
        <Text style={{ marginLeft: Rw(9), fontFamily: colors.fontfaimly_heding, color: colors.heading }}>Total Time:</Text>
        <Text style={{ marginLeft: Rw(50), fontWeight: 'bold', fontFamily: colors.fontfaimly_text, color: colors.font1 }}>20 Minutes</Text>
      </View>
      {/* Add other rows here for Subtotal, Coupon Discount, and Total */}

      {/* Rebook and Review Buttons */}
      <View style={{ marginTop: Rh(2), fontFamily: colors.fontfaimly_heding }}>
        <RecptButton titlenext={'ReBook'} titleback={'ReView'} backgroundColor1={colors.background} backgroundColor2={colors.ServiceProvider_buttonBackground} fontcolor={colors.ServiceProvider_buttonBackground} fontcolor1={colors.background} />
      </View>
    </ScreenWrapper>
  );
};

export default RecptComplete;
