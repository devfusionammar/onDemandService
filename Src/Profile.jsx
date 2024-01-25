import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import Icones from '../components/icones';

const iconSize = Math.min(Rw(60), 60);

export default function Profile() {
  const navigation = useNavigation(); 
  const updatePass = () => {
    navigation.navigate('Changepass');
  };
  const updateProfile = () => {
    navigation.navigate('UProfile');
  };
  const renderListItem = (item, index) => (
    <TouchableOpacity key={index} style={{ flexDirection: 'row', paddingVertical: Rh(1.2), paddingHorizontal: Rw(3.5), marginTop: Rh(1.2) }} onPress={item.onPress}>
      <View style={{ borderRadius: 30, backgroundColor: colors.headerbackground, width: iconSize * 0.6, height: iconSize * 0.6, justifyContent: 'center', alignItems: 'center' }}>
        {item.icon}
      </View>
      <Text style={{ marginLeft: Rw(7), fontSize: fo(2), color: 'black', margin: Rh(1.3) }}>{item.text}</Text>
      {['My Profile', 'Favorite Beautician', 'Payment Method', 'Change Password'].includes(item.text) && (
        <View style={{   justifyContent: 'Center', alignItems: 'Center' }}>
         {item.icone2}
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper style={{ flex: 1, textLG: { fontSize: fo(1.5), fontWeight: '600', color: 'black' } }}>
      <View>
        <Text style={{ textAlign: 'center', fontSize: fo(3), fontWeight: 'bold', color: colors.heading, marginTop: Rh(4) }}>Profile</Text>
      </View>

      <View style={{ marginTop: Rh(1), paddingVertical: Rh(2), backgroundColor: colors.headerbackground, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: Rw(30), height: Rw(30) }} source={require('../assets/profile.png')} />
        <Text style={{ fontSize: fo(1.7), fontWeight: 'bold', color: 'white', marginLeft: Rw(10), marginTop: -Rh(1) }}> Viren Radadiya {'\n'} ibnerieadazz@gmail.com </Text>
      </View>

      {[
        { icon: <Ionicons name="person-outline" size={iconSize * 0.4} color={colors.background} />, text: 'My Profile', icone2:<Icones icon_margine={50} icon_top={1}/>, onPress: updateProfile },
        { icon: <Image source={require('../assets/Icons/vector.png')} style={{ width: iconSize * 0.4, height: iconSize * 0.4 }} />, text: 'Favorite Beautician',icone2:<Icones icon_margine={37} icon_top={1}/> },
        { icon: <Image source={require('../assets/Icons/Paymentmethod.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Payment Method',icone2:<Icones icon_margine={40} icon_top={1}/> },
        { icon: <Image source={require('../assets/Icons/changepassword.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Change Password',icone2:<Icones icon_margine={39} icon_top={1}/> , onPress: updatePass},
        { icon: <Image source={require('../assets/Icons/privacypolicy.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Privacy policy' },
        { icon: <Image source={require('../assets/Icons/aboutus.png')} style={{ width: iconSize, height: iconSize }} />, text: 'About us' },
        { icon: <Image source={require('../assets/Icons/logout.png')} style={{ width: iconSize, height: iconSize }} />, text: 'Logout' },
      ].map((item, index) => renderListItem(item, index))}
    </ScreenWrapper>
  );
}
