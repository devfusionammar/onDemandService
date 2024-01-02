import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import { colors } from '../../theme';

const Login = ({ navigation }) => {
  const BottomNavigation = () => {
    navigation.navigate('BottomNavigation');
  };

  const handleForgotPassword = () => {
   navigation.navigate('ForgotPassword');
 };
  const handleSignUp = () => {
   navigation.navigate('Signup');
 };

  return (
    <View style={styles.container}>     
        <Text style={styles.loginText}>Log In</Text> 
        <Text style={styles.h2}>Login to your account to access all the features in Barber Shop</Text>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Text style={styles.EmailText}>Email/Phone Number</Text>
          <Input placeholder={''} />
         
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.EmailText}>Password</Text>
          <Input placeholder={''} is_password={true} />
        </View>

        <View style={styles.forgetsaveContainer}>
          <TouchableOpacity>
            {/* Add your Remember Me functionality here */}
            <Text style={styles.saveMeText}>Save Me</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleForgotPassword}>
            {/* Add your Forgot Password functionality here */}
            <Text style={styles.forgetPasswordText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{marginTop:Rw(8), marginLeft:Rw(25)}}>
          <Buttons titlenext={'Log In'} pressnext={BottomNavigation} backgroundColor1={colors.headerbackground} fontcolor={colors.background}/>
        </TouchableOpacity>
      </View>
      <View style={styles.lowertxtContainer}>
      <View style={styles.line}></View>
      <Text style={{fontSize:fo(2), color:colors.heading}}>Or Sign in with</Text>
      <View style={styles.line}></View>
      </View>
      
      <View style={{  flexDirection: 'row', marginLeft:Rw(35), marginTop: Rw(1)}}>
      <View>
      <Image 
              style={{width:40, height:40, 
              top:"32%", left:"2%" }}
              source={require("../../assets/facebook.png")}
            />
      </View>
      <View>
      <Image 
              style={{width:40, height:40, 
              top:"32%", left:"2%" }}
              source={require("../../assets/apple.png")}
            />
      </View>
      <View>
      <Image 
              style={{width:40, height:40, 
              top:"32%", left:"2%" }}
              source={require("../../assets/google.png")}
            />
      </View>
      </View>
      <View style={{flexDirection:'row', marginTop:Rw(30), marginLeft:Rw(25)}}>
      <Text style={{fontSize:fo(2), color:colors.font1}} >Don't have an Account?</Text>
      <TouchableOpacity onPress={handleSignUp} >
            <Text style={{fontSize:fo(2), color:colors.headerbackground}}>SIGN UP?</Text>
          </TouchableOpacity>
          </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },

  loginText: {
    fontSize: fo(3),
    marginTop:Rw(8),
    fontWeight: 'bold',   
    textAlign: 'center',
  },

  h2: {
   fontSize: fo(2.5),
   backgroundColor: colors.headerbackground,
   color: colors.background,
   marginTop:Rw(1.6),
   padding:40,
   textAlign: 'center',
  },

  inputContainer: {
    
    marginTop: Rw(8),
  },

  EmailText: {
    fontSize: fo(1.8),
    color:colors.font1,
    fontWeight: 'bold',
    marginLeft:Rw(10)
  },

  forgetsaveContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop: Rw(2),
 },

 saveMeText: {
   fontSize: fo(1.8),
   color: colors.heading,
   marginLeft:Rw(10)
 },

 forgetPasswordText: {
   fontSize: fo(1.8),
   color: colors.headerbackground,
   fontWeight:'bold',
   marginRight:Rw(10)
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