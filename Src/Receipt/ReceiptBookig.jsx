import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform ,TextInput ,TouchableOpacity,ActivityIndicator, Alert,StyleSheet,ScrollView} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors } from '../../theme';
import { responsiveHeight as Rh, responsiveScreenWidth as Rw, responsiveScreenFontSize as fo } from 'react-native-responsive-dimensions';
import { useWindowDimensions } from 'react-native';
import { useProductContext } from '../../contexprovider/ProduxtContext'; // Import the context hook
import { useRoute } from '@react-navigation/native';
import BookingButtons from '../../components/bookingButton';
import { bookingConfirm } from '../../services/bookingconfrm';
import BackButton from '../../components/backbutton';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
const RecptBooking = () => {
    const route = useRoute();
    const { saloonId, selectedDate, selectedTime } = route.params;
    const { products } = useProductContext(); 
    const [loading, setLoading] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    console.log(saloonId, selectedDate, selectedTime);
  const navigation = useNavigation();
    const handleBooking = async (mainServiceId, subServiceId) => {
      console.log("pressed with mainServiceId:", mainServiceId, "and subServiceId:", subServiceId);
      setLoading(true);
      try {
        
        // Pass mainServiceId and subServiceId to bookingConfirm function
        await bookingConfirm({ saloonId, selectedDate, selectedTime, mainServiceId, subServiceId,mainServiceIds, subServiceIds,totalAmount });
      } catch (error) {
        console.error('Error confirming booking:', error);
        setLoading(false);
      }finally{
        setLoading(false);
       Alert.alert("Booking Confirmed")
      }
    }
  
    const extractIdsFromProducts = () => {
      const mainServiceIds = [];
      const subServiceIds = [];
  
      products.forEach(product => {
        // Extract main service ID
        if (product.service && product.service.id) {
          mainServiceIds.push(product.service.id);
        }
  
        // Extract sub-service IDs
        if (product.subServices && product.subServices.length > 0) {
          product.subServices.forEach(subService => {
            if (subService.id) {
              subServiceIds.push(subService.id);
            }
          });
        }
      });
  
      return { mainServiceIds, subServiceIds };
    };
  
    const { mainServiceIds, subServiceIds } = extractIdsFromProducts();
    useEffect(() => {
        // Calculate total amount when products change
        calculateTotalAmount();
      }, [products]);
    
      const calculateTotalAmount = () => {
        let total = 0;
        products.forEach(product => {
          if (product.subServices && product.subServices.length > 0) {
            product.subServices.forEach(subService => {
              total += parseFloat(subService.realPrice);
            });
          }
        });
        setTotalAmount(total.toFixed(2)); // Set the total amount with 2 decimal places
      };
    console.log("Main Service IDs:", mainServiceIds);
    console.log("Sub Service IDs:", subServiceIds);
    const formattedTime = moment(selectedTime).format('hh:mm A');
    // Render loading indicator if loading
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={colors.headerbackground} />
        </View>
      );
    }
  

  const renderServiceItem = (title, price, mainServiceId, subServiceId) => (
    <TouchableOpacity onPress={() => handleBooking(mainServiceId, subServiceId)}>
      <View style={{ backgroundColor: colors.ServiceProvider_buttonBackground, height: Rh(5), width: Rh(38), marginTop: Rh(0.1) }}>
          <Text style={{ fontSize: fo(2), marginTop: Rw(2.5), color: colors.background, marginLeft: Rw(6) }}>{title}</Text>
          <View><Text style={{ fontSize: fo(2), marginTop: Rw(-5.5), color: colors.background, marginLeft: Rw(60) }}>Pkr {price}</Text></View>
      </View>
    </TouchableOpacity>
  );

  const useStyles = () => {
    const { width, height } = useWindowDimensions();
    // Add your style calculations here if needed
  }

 

  return (
    <ScreenWrapper>
      
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:colors.topbackground,height:Rh(8),width:'100%',marginTop:Platform.OS=='android'? 0: Rh(1.3)}}>
      <TouchableOpacity
          style={styles.backButton}
        >
          <BackButton onPress={()=> navigation.navigate('ServiceProvider')}/>
        </TouchableOpacity>
        <Text style={styles.loginText}>Receipt</Text> 
        </View>
      {/* ServiceProvider Section */}
      <View style={{ flexDirection: 'row',marginTop:Platform.OS=='ios'?Rh(-2):0 }}>
        {[{ image: require('../../assets/popularServiceProvider/Bacground.png') },
        { image: require('../../assets/Icons/Vector1.png') },
        { image: require('../../assets/popularServiceProvider/ayeshawomen.png') },
        ].map((item, index) => (
          <View key={index} style={{ marginTop: index === 0 ? Rh(4) : index === 1 ? Rh(5) : Rh(1), width: index === 1 ? 0 : Rw(7), marginLeft: item.marginLeft }}>
            <Image source={item.image} style={{ ...item.style }} />
          </View>
        ))}

        <View style={{ flexDirection: 'row', marginTop: Rh(4), borderStyle: 'dashed', borderColor: colors.font1, borderWidth: Rw(0.4), height: Rh(10), width: Rw(60), marginHorizontal: Rw(21), borderTopRightRadius: Rw(5), borderBottomRightRadius: Rw(5), overflow: 'hidden' }}>
          <View>
            <Text style={{ fontSize: fo(2), fontWeight: 'bold', marginTop: Rw(1), color: colors.font1, marginLeft: Rw(7) }}>Serenity Salon</Text>
            <Text style={{ fontSize: fo(2), fontWeight: 'bold', marginTop: Rw(0.1), color: colors.heading, marginLeft: Rw(8) }}>56478965</Text>
            <Image source={require('../../assets/Icons/star.png')} style={{ marginTop: Rw(0.2), marginLeft: Rw(4.3), width: Rw(4.5) }} />
            <Text style={{ fontSize: fo(1.7), fontWeight: 'bold', marginTop:Platform.OS=='ios'? Rw(-3.9):Rw(-5), color: colors.font1, marginLeft: Rw(9) }}>4.9</Text>
            <Text style={{ fontSize: fo(1.7), fontWeight: 'bold', marginTop:Platform.OS=='ios'? Rw(-3.9):Rw(-5), color: colors.heading, marginLeft: Rw(14.5) }}>(27)</Text>
          </View>
        </View>
      </View>

      {/* Date and Time Section */}
      {[{ title: `Date: ${selectedDate}` }, { title: `Time: ${formattedTime}` }].map((item, index) => (
        <View key={index} style={{ elevation: Platform.OS === 'android' ? 5 : undefined, marginLeft: Rw(11), backgroundColor: colors.ServiceProvider_buttonBackground, height: Rh(5), width: Rh(36), borderRadius: Rw(1), marginTop: index === 1 ? Rh(2) : Rh(0) }}>
          <Text style={{ borderColor: colors.background, borderWidth: Rw(0.5), fontSize: fo(2), marginTop: Rw(1.9), color: colors.font1, marginLeft: Rw(2), marginRight: Rw(2), textAlign: 'center' }}>{item.title}</Text>
        </View>
      ))}

      {/* Pricing Section */}
      <View style={{ marginTop: Rh(1), marginLeft: Rw(7), width: Rw(85), height: Rh(37), borderWidth: Rw(2), borderColor: colors.background }}>
        <View style={{ backgroundColor: colors.headerbackground, height: Rh(5), width:Platform.OS=='android'?Rw(79.2): Rh(37.4),flexDirection:'row' }}>
        <Text style={{ fontSize: fo(2.3), marginTop: Rw(2.5), color: colors.font1, marginLeft: Rw(6) }}>Name</Text>
          <Text style={{ fontSize: fo(2.3), marginTop: Rw(2.5), color: colors.font1, marginLeft: Rw(43) }}>Pricing</Text>
        </View>
        <ScrollView scrollIndicatorInsets={false}>
        <Text>
          {products?.map((item, index) => (
            <React.Fragment key={index}>
              {/* Log subServices within each product */}
              {item?.subServices?.map((subService, subIndex) => (
                <React.Fragment key={subIndex}>
                  {renderServiceItem(subService?.name, subService?.realPrice, item._id, subService._id)}
                  {console.log(subService?.name, subService?.realPrice)}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </Text>
        </ScrollView>
      </View>

      {/* Total Time, Subtotal, Coupon Discount, and Total Section */}
      <View style={{ flexDirection: "row", marginTop: Rh(1.5) }}>
        <Text style={{ marginLeft: Rw(9), fontFamily: colors.fontfaimly_heding, color: colors.heading }}>Total Time:</Text>
        <Text style={{ marginLeft: Rw(50), fontWeight: 'bold', fontFamily: colors.fontfaimly_text, color: colors.font1 }}>20 Minutes</Text>
      </View>
      {/* Cupon input field */}
      <View>
        <View style={{ marginTop: Rh(2), paddingHorizontal: Rw(7) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 20, borderWidth: 1, borderColor: colors.font1, overflow: 'hidden' }}>
            {/* Red dot */}
            <View style={{ backgroundColor: 'red', width: 10, height: 10, borderRadius: 5, marginLeft: 10 }} />
            
            {/* Coupon input field */}
            <TextInput
              style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 15, fontSize: fo(2), color: colors.font1 }}
              placeholder="Enter coupon code"
              placeholderTextColor={colors.font1}
              // Add onChangeText prop to update the coupon state
            />
            
            {/* Apply button */}
            <TouchableOpacity
              style={{ backgroundColor: colors.ServiceProvider_buttonBackground, paddingHorizontal: 20, paddingVertical: 10 }}
            >
              <Text style={{ fontSize: fo(2), color: colors.background }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
      <Text style={{ fontSize: fo(2), marginTop: Rw(2), color: colors.font1, marginLeft: Rw(6) }}>Total Amount: PKR {totalAmount} </Text>
      </View>
      {/* Confirm Button */}
      <View style={{ marginTop:Platform.OS=='ios'?Rh(6.3): Rh(8), fontFamily: colors.fontfaimly_heding }}>
        <BookingButtons backgroundColor={colors.ServiceProvider_buttonBackground} titlenext={'Book Now' } pressnext={()=>handleBooking()} />
      </View>
      
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({

  EmailText: {
    fontSize: fo(1.3),
    color: colors.font1,
    fontWeight: 'bold',
    marginLeft: Rw(1),
    marginBottom:Rh(1)
  },
  backButton: {
    position: 'absolute',
    top: Rh(0.5),
    left: Rw(0.2),
    zIndex: 1,
    marginTop:Rh(2),
    marginLeft:Rw(4)
  },
});
export default RecptBooking;