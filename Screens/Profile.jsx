import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
const iconSize = Math.min(width * 0.1, 60);

export default function Profile() {
  return (
    <ScreenWrapper style={{ flex: 1, textLG: { fontSize: 16, fontWeight: '600', color: 'black' } }}>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: height * 0.05 }}>Profile</Text>
      </View>

      <View style={{ marginTop: height * 0.05, paddingVertical: height * 0.1, backgroundColor: '#4C79BC', justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: width * 0.3, height: width * 0.3, }} source={require('../assets/profile.png')} />
        <Text style={{ fontSize: 16, color: 'white', marginTop: height * 0.02 }}> Viren Radadiya {'\n'} ibnerieadazz@gmail.com </Text>
      </View>

      {[
        { icon: <Ionicons name="person-outline" size={iconSize * 0.7} color={colors.background} />, text: 'My Profile' },
        { icon: <Image source={require('../assets/Icons/vector.png')} style={{ width: iconSize * 0.5, height: iconSize * 0.5 }} />, text: 'Favorite Beautician' },
        { icon: <Image source={require('../assets/Icons/Paymentmethod.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Payment Method' },
        { icon: <Image source={require('../assets/Icons/changepassword.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Change Password' },
        { icon: <Image source={require('../assets/Icons/privacypolicy.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Privacy policy' },
        { icon: <Image source={require('../assets/Icons/aboutus.png')} style={{ width: iconSize, height: iconSize }} />, text: 'About us' },
        { icon: <Image source={require('../assets/Icons/logout.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Logout' },
      ].map((item, index) => (
        <TouchableOpacity key={index} style={{ flexDirection: 'row', paddingVertical: height * 0.02, paddingHorizontal: width * 0.05, marginTop: height * 0.02 }}>
          <View style={{ borderRadius: 50, backgroundColor: colors.headerbackground, width: iconSize * 0.6, height: iconSize * 0.6, justifyContent: 'center', alignItems: 'center' }}>
            {item.icon}
          </View>
          <Text style={{ marginLeft: width * 0.1, fontSize: 16, color: 'black', margin: height * 0.005 }}>{item.text}</Text>
          <View style={{ marginLeft: width * 0.4, borderRadius: 50, width: iconSize * 0.6, height: iconSize * 0.6, justifyContent: 'center', alignItems: 'center' }}>
            <Icon1 name="greater-than" size={iconSize * 0.4} color="black" />
          </View>
        </TouchableOpacity>
      ))}
    </ScreenWrapper>
  );
}
