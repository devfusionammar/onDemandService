import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import Input from '../../components/Input';
import BackButton from '../../components/backbutton';
export default function Changepass() {
  const navigation = useNavigation(); 
  const showbottom = () => {
    navigation.navigate('BottomNavigation');
  };
 
  return (
    <ScreenWrapper>
       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor:colors.topbackground,height:Rh(8),width:'100%',marginTop:Platform.OS=='android'? 0: Rh(1.3)}}>
      <TouchableOpacity
          style={styles.backButton}
        >
          <BackButton onPress={()=> navigation.navigate('Profile')}/>
        </TouchableOpacity>
        <Text style={styles.loginText}>Update Profile</Text> 
        </View>
      <View style={{ marginTop: Rh(0), paddingVertical: Rh(2), backgroundColor: colors.headerbackground, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: Rw(30), height: Rw(30) }} source={require('../../assets/profile.png')} />
        <Text style={{ fontSize: fo(1.7), fontWeight: 'bold', color: 'white', marginLeft: Rw(10), marginTop: -Rh(1) }}> Viren Radadiya {'\n'} ibnerieadazz@gmail.com </Text>
      </View>
 
      
        <Text style={{fontSize: fo(1.9), fontWeight: 'bold', color:colors.font1, paddingHorizontal: Rw(10), marginTop: Rh(6) }}>Email</Text>
        <Input placeholder={'Enter Email'}/>
        <Text style={{fontSize: fo(1.9), fontWeight: 'bold', color:colors.font1, paddingHorizontal: Rw(10), marginTop: Rh(2) }}>Old Password</Text>
        <Input placeholder={'Enter Old Password'} is_password={true}  right={Rw(10)}/>
        <Text style={{fontSize: fo(1.9), fontWeight: 'bold', color:colors.font1, paddingHorizontal: Rw(10), marginTop: Rh(2) }}>New Password</Text>
        <Input placeholder={'Enter New Password'} is_password={true} right={Rw(10)}/>  
        <TouchableOpacity onPress={showbottom} style={{ width: Rh(30),marginLeft:Rw(20), backgroundColor: colors.headerbackground, padding: Rw(4), borderRadius: Rw(4), alignItems: 'center', marginTop: Rh(22) }}>
        <Text style={{ fontSize:fo(2),color: colors.background, fontWeight: 'bold' }}>Update</Text>
        </TouchableOpacity>    
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({

  loginText: {
    fontSize: fo(3),
    marginTop: Rw(0),
    fontWeight: 'bold',   
    textAlign: 'center',
    color: 'white',
  },

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