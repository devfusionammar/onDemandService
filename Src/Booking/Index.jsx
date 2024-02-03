import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert, StyleSheet, ScrollView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useProductContext } from '../../contexprovider/ProduxtContext';
import BookingButtons from '../../components/bookingButton';
import ScreenWrapper from '../../components/ScreenWrapper';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import { colors } from '../../theme';
import { serviceProviderList } from '../../services/beautationData';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as Rf,
} from 'react-native-responsive-dimensions';
import { Platform } from 'react-native';

const ServiceListShow = () => {
  const { addProduct } = useProductContext();
  const [selectedServiceProvider, setSelectedServiceProvider] = useState({});
  const [selectedSubServices, setSelectedSubServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serviceData, setServiceData] = useState([]);
  const route = useRoute();
  const { beauticianId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await serviceProviderList(beauticianId);
        setServiceData(data.services);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const options = serviceData?.map(service => ({
    item: service.categoryName,
    id: service._id,
    subServices: service.Types.map(type => ({
      item: `${type.Name} - ${type.Price}`,
      id: type._id
    })),
  }));

  const saveBookingData = () => {
    const selectedService = serviceData.find(service => service._id === selectedServiceProvider.id);
    const bookingData = {
    
      service: {

        id: selectedServiceProvider.id,
        name: selectedService?.categoryName,
        realPrice: selectedService?.Types.reduce((total, type) => total + parseFloat(type.Price), 0), // Calculating total price of all sub-services
      },
      subServices: selectedSubServices.map(subService => ({
        id: subService.id,
        name: subService.item.split(' - ')[0], // Extracting name from item
        realPrice: parseFloat(subService.item.split(' - ')[1]), // Extracting realPrice from item
      })),
    
    };
    addProduct(bookingData);
    Alert.alert('Booking Data Saved', 'Booking data has been saved successfully!');
    navigation.navigate('Schedule',{saloonId:beauticianId});
  };
  
  return (
   
      <ScreenWrapper style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select Service</Text>
        </View>
        <View style={styles.content}>
          <SelectBox
            label="Select Service"
            options={options}
            value={selectedServiceProvider}
            onChange={onChange()}
            hideInputFilter={false}
          />
          <View style={{ height: 40 }} />
          <SelectBox
            label="Select multiple"
            options={selectedServiceProvider.subServices || []}
            selectedValues={selectedSubServices}
            onMultiSelect={onMultiChange()}
            onTapClose={onMultiChange()}
            isMulti
          />
         
        </View>
        <View style={styles.bottomButtonContainer}>
            <BookingButtons backgroundColor={colors.ServiceProvider_buttonBackground} titlenext={'Book Now'} pressnext={saveBookingData} />
          </View>
      </ScreenWrapper>
   
  );

  function onMultiChange() {
    return (item) => setSelectedSubServices(xorBy(selectedSubServices, [item], 'id'));
  }

  function onChange() {
    return (val) => {
      setSelectedServiceProvider(val);
      setSelectedSubServices([]); // Reset selected sub-services when changing the service provider
    };
  }
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
  },
  headerContainer: {
    marginTop: Platform.OS === 'ios' ? Rh(4) : Rh(2),
    alignItems: 'center',
    marginBottom: Rh(2),
  },
  headerText: {
    fontSize: Rf(3.5),
    fontWeight: 'bold',
    color: colors.font1,
  },
  content: {
    margin: Rh(2),
  },
  bottomButtonContainer: {
    marginTop: Rh(60),
    bottom: 10,
    width: '100%',
    height: 50, // Fixed height
  },
});

export default ServiceListShow;
