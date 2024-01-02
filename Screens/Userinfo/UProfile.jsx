import React from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import Input from '../../components/Input';

export default function UProfile() {
  const navigation = useNavigation(); 
  const showbottom = () => {
    navigation.navigate('BottomNavigation');
  };
 
  return (
    <ScreenWrapper>
      <View>
        <Text style={{ textAlign: 'center', fontSize: fo(3), fontWeight: 'bold', color: colors.heading, marginTop: Rh(4) }}>MY Profile</Text>
      </View>

      <View style={{ marginTop: Rh(1), paddingVertical: Rh(2), backgroundColor: colors.headerbackground, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: Rw(30), height: Rw(30) }} source={require('../../assets/profile.png')} />
        <Text style={{ fontSize: fo(1.7), fontWeight: 'bold', color: 'white', marginLeft: Rw(10), marginTop: -Rh(1) }}> Viren Radadiya {'\n'} ibnerieadazz@gmail.com </Text>
      </View>
 
      
      <Text style={{fontSize: fo(1.9), fontWeight: 'bold', color:colors.font1, paddingHorizontal: Rw(10), marginTop: Rh(6) }}>First Name</Text>
        <Input placeholder={'Enter First Name'}/>
        <Text style={{fontSize: fo(1.9), fontWeight: 'bold', color:colors.font1, paddingHorizontal: Rw(10), marginTop: Rh(2) }}>Last Name</Text>
        <Input placeholder={'Enter Last Name'}/>
        <Text style={{fontSize: fo(1.9), fontWeight: 'bold', color:colors.font1, paddingHorizontal: Rw(10), marginTop: Rh(2) }}>Email</Text>
        <Input placeholder={'Enter Email'} />
        <Text style={{fontSize: fo(1.9), fontWeight: 'bold', color:colors.font1, paddingHorizontal: Rw(10), marginTop: Rh(2) }}>Phone Number</Text>
        <Input placeholder={'Enter Phone Number'} />  
        <TouchableOpacity onPress={showbottom} style={{ width: Rh(30),marginLeft:Rw(20), backgroundColor: colors.headerbackground, padding: Rw(4), borderRadius: Rw(4), alignItems: 'center', marginTop: Rh(12) }}>
        <Text style={{ fontSize:fo(2),color: colors.background, fontWeight: 'bold' }}>Update</Text>
        </TouchableOpacity>    
    </ScreenWrapper>
  );
}
