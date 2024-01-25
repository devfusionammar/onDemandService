import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import RatingIcon from 'react-native-vector-icons/Entypo';
import FavoriteIcon from '../../components/favoriteicon';
import BackButton from '../../components/backbutton';
import ScreenWrapper from '../../components/ScreenWrapper';
import { serviceProviderInfo } from '../../assets/ServiceProviderInfo/ServiceProvidetInfo';
import { colors } from '../../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as Rf,
} from 'react-native-responsive-dimensions';
import { Platform } from 'react-native';
import ServiceProviderButton from '../../components/ServiceProviderButton';
import ServiceList from './ServicesList';
import ServiceProviderAbout from './serviceProviderAbout';
import ServiceProviderReviews from './ServiceProviderReviews';
import BookingButtons from '../../components/bookingButton';

const ServiceProviderInfo = ({ navigation }) => {
  const selectedId = 1;
  const selectedSalon = serviceProviderInfo.find(
    (serviceProvider) => serviceProvider.id === selectedId
  );

  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const toggleContent = (content) => {
    setShowAbout(content === 'About');
    setShowServices(content === 'Services');
    setShowReview(content === 'Review');
  };

  if (!selectedSalon) {
    return (
      <ScreenWrapper>
        <View>
          <Text>No salon found for the selected ID</Text>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // Handle back button press
          }}
        >
          <BackButton />
        </TouchableOpacity>

        {/* Favorite Icon */}
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => {
            // Handle favorite icon press
          }}
        >
          <FavoriteIcon />
        </TouchableOpacity>

        {/* Available Button */}
        <TouchableOpacity
          style={styles.availableButton}
          onPress={() => {
            // Handle available button press
          }}
        >
          <Text style={styles.availableButtonText}>Available</Text>
        </TouchableOpacity>

        {/* Salon Image */}
        <Image source={selectedSalon.img} style={{ width: '100%', height: Rh(30) }} />

        {/* Salon Details */}
        <View key={selectedSalon.id}>
          <View className="flex-row justify-around ">
            <View>
              <Text style={styles.salonName}>{selectedSalon.saloname}</Text>
              <View style={styles.contactContainer}>
                <IonIcons name={'call'} color={'red'} size={15} />
                <View style={styles.phoneNumberContainer}>
                  <Text style={styles.phoneNumber}>{selectedSalon.phonenumber}</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <RatingIcon name={'star'} color={'#F4C01E'} size={15} />
                <View style={styles.ratingTextContainer}>
                  <Text style={styles.rating}>
                    {selectedSalon.rating} ({selectedSalon.noofRating})
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: Rh(2),
                backgroundColor: colors.serviceProviderStatus,
              }}
              className="rounded p-1  h-7 w-20 ml-9 "
            >
              <Text className="text-s font-semibold text-black text-center">
                {selectedSalon.availabilityStatus}
              </Text>
            </View>
          </View>

          {/* Gallrey Details*/}
          <View
            className=" justify-around h-20 mt-4"
            style={{ backgroundColor: colors.headerbackground }}
          >
            <View style={{ marginTop: 10 }} className="flex-row justify-around p-2">
              <ServiceProviderButton
                buttonName="About"
                onPressButtonClick={() => toggleContent('About')}
              />
              <ServiceProviderButton
                buttonName="Services"
                onPressButtonClick={() => toggleContent('Services')}
              />

              <ServiceProviderButton
                buttonName="Review"
                onPressButtonClick={() => toggleContent('Review')}
              />
            </View>
          </View>

          {/* Conditional Content */}
          {showAbout && <ServiceProviderAbout />}
          {showServices && <ServiceList />}
          {showReview && <ServiceProviderReviews />}
        </View>
      </ScrollView>

      {/* Bottom Button Container */}
      <View style={styles.bottomButtonContainer}>
        <BookingButtons backgroundColor={colors.ServiceProvider_buttonBackground} titlenext={'Book Now'} pressnext={()=>navigation.navigate("Booking")} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: Rh(16), // Space for the "Book Now" button
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  availableButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.primary,
    // Customize the color
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  availableButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  salonName: {
    color: colors.font1,
    fontWeight: colors.FontWeight,
    fontSize: Rf(2),
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? -5 : 0,
  },
  phoneNumberContainer: {
    marginTop: Platform.OS === 'android' ? 0 : Rh(0.2),
    marginLeft: Rw(1),
  },
  phoneNumber: {
    color: colors.font1,
    fontWeight: 'bold',
    fontSize: Rf(1.7),
    color: colors.fontSubheadin,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? Rh(-0.3) : Rh(0.2),
  },
  ratingTextContainer: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? Rh(-0.3) : Rh(0.2),
    marginLeft: Rw(1),
  },
  rating: {
    color: colors.font1,
    fontWeight: 'bold',
    fontSize: Rf(1.3),
    color: colors.font1,
    marginLeft: Rw(1),
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});

export default ServiceProviderInfo;
