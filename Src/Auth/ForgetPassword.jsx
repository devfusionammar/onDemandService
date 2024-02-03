import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import ScreenWrapper from '../../components/ScreenWrapper';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { colors } from '../../theme';
import { Platform } from 'react-native';
import { forgetPassword } from '../../services/apiauth';
import { sendOTP } from '../../services/OtpService';
const ForgetPassword = ({ navigation }) => {
  const [formData, setFormData] = useState({
    OTPReq: '',
    NewPassword: '',
    Password:'',
  });
  const [loading, setLoading] = useState(false); 
 
  const sendOtpAndAlert = async () => {
    try {
        setLoading(true); 
      await sendOTP();
      Alert.alert(
        'OTP Sent',
        'Please check your email for OTP',
      );
    } catch (err) {
        setLoading(false); 
      console.error('Error sending OTP:', err);
      // Handle error here
    }finally{
        setLoading(false); 

    }
  };
  const handlleLogin = () => {
    // Check if OTP and new password are provided
    if (!formData.OTPReq || !formData.NewPassword) {
      Alert.alert('Error', 'Please enter OTP and new password');
      return;
    }
  
    // Check if passwords match
    if (formData.NewPassword !== formData.Password) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
  
    // If all validations pass, proceed with password reset
    setLoading(true);
    forgetPassword(formData)
      .then((response) => {
        if (response.message) {
          if (response.message == 'Request OTP Again' || response.message == 'Code has expired. Please request again') {
            Alert.alert('OTP id Expired');
          } else {
            navigation.navigate('BottomNavigation');
          }
        } else {
          setLoading(false);
          console.error('Password Reset failed:', response.Message);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Login error:', error);
        Alert.alert('Enter Correct OTP & Password');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleSignUp = () => {
    navigation.navigate('Login');
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>     
        <Text style={styles.loginText}>Log In</Text> 
        <Text style={styles.h2}>Change The Password to Book Beautation</Text>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.EmailText}>Enter OTP</Text>
            <Input 
              placeholder={'Enter OTP'} 
              onChangeText={(text) => setFormData({ ...formData, OTPReq: text })} 
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.EmailText}>New Password</Text>
            <Input 
              placeholder={'Enter New Password'} 
              is_password={true} 
              onChangeText={(text) => setFormData({ ...formData, NewPassword: text })} 
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.EmailText}>Confrm Password</Text>
            <Input 
              placeholder={'Enter Confrm Password'} 
              is_password={true} 
              onChangeText={(text) => setFormData({ ...formData, Password: text })} 
            />
          </View>
          <View style={styles.forgetsaveContainer}>
            <TouchableOpacity>
              {/* Add your Remember Me functionality here */}
              <Text style={styles.saveMeText}>Save Me</Text>
            </TouchableOpacity>
            
          
          </View>

          <TouchableOpacity 
            style={{marginTop: Rw(8), marginLeft: Rw(0)}} 
            pressnext={handlleLogin}
            disabled={loading} // Disable button when loading
          >
            {/* Show activity indicator while loading */}
            {loading ? (
                <ActivityIndicator size="large" color={colors.headerbackground} />
            ) : (
              <Buttons 
                titlenext={'Send OTP'}
                backgroundColor1={colors.headerbackground} 
                fontcolor={colors.background}
                pressnext={sendOtpAndAlert}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity 
            style={{marginTop: Rw(8), marginLeft: Rw(0)}} 
            pressnext={handlleLogin}
            disabled={loading} // Disable button when loading
          >
            {/* Show activity indicator while loading */}
            {loading ? (
                <ActivityIndicator size="large" color={colors.headerbackground} />
            ) : (
              <Buttons 
                titlenext={'Login'}
                backgroundColor1={colors.headerbackground} 
                fontcolor={colors.background}
                pressnext={handlleLogin}
              />
            )}
          </TouchableOpacity>
        </View>

       
        
        

        <View style={{flexDirection:'row', marginTop: Rw(18), marginLeft: Platform.OS==="ios" ? Rw(20) : Rw(25)}}>
          <Text style={{fontSize: fo(2), color: colors.font1}}>Login to  Account  </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{fontSize: fo(2), color: colors.headerbackground}}>LOG IN?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },

  loginText: {
    fontSize: fo(3),
    marginTop: Rw(8),
    fontWeight: 'bold',   
    textAlign: 'center',
    color: 'black',
  },

  h2: {
    fontSize: fo(2.5),
    backgroundColor: colors.headerbackground,
    color: colors.background,
    marginTop: Rw(1.6),
    padding: 40,
    textAlign: 'center',
  },

  inputContainer: {
    marginTop: Rw(8),
  },

  EmailText: {
    fontSize: fo(1.8),
    color: colors.font1,
    fontWeight: 'bold',
    marginLeft: Rw(10)
  },

  forgetsaveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Rw(2),
  },

  saveMeText: {
    fontSize: fo(1.8),
    color: colors.heading,
    marginLeft: Rw(10)
  },

  forgetPasswordText: {
    fontSize: fo(1.8),
    color: colors.headerbackground,
    fontWeight: 'bold',
    marginRight: Rw(10)
  },

  lowertxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Rw(12),
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black', 
    marginHorizontal: Rw(0.5), 
  },

});

