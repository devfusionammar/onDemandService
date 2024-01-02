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
  
  const Signup = ({ navigation }) => {
    const backlogin = () => {
      navigation.navigate('Login');
    };
  
    const handleSignUp = () => {
      navigation.navigate('Signup');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Register</Text>
        <Text style={styles.h2}>
          Register to your account to access all the features in Barber Shop
        </Text>
  
        <View style={styles.loginlowercont}>
          <View style={styles.inputContainer}>
            <Text style={styles.EmailText}>Name</Text>
            <Input placeholder={''} />
          </View>
        </View>
  
        <View style={styles.loginlowercont}>
          <View style={styles.inputContainer}>
            <Text style={styles.EmailText}>Email</Text>
            <Input placeholder={''} />
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.EmailText}>Password</Text>
            <Input placeholder={''} is_password={true} />
          </View>
  
          <View style={styles.inputContainer}>
            <Text style={styles.EmailText}>Gender</Text>
            <Input placeholder={''} />
          </View>
  
          <TouchableOpacity style={{marginTop:Rw(8), marginLeft:Rw(25)}}>
            <Buttons titlenext={'Register'} pressnext={backlogin} backgroundColor1={colors.headerbackground} fontcolor={colors.background} />
          </TouchableOpacity>
        </View>
  
        <View style={styles.lowertxtContainer}>
          <View style={styles.line}></View>
          <Text style={{fontSize:fo(2), color:colors.heading}}>Or Register with</Text>
          <View style={styles.line}></View>
        </View>
  
        <View style={{  flexDirection: 'row', marginLeft:Rw(35), marginTop: Rw(1)}}>
          <View>
            <Image
              style={{width: 40, height: 40, top: '32%', left: '2%'}}
              source={require('../../assets/facebook.png')}
            />
          </View>
          <View>
            <Image
              style={{width: 40, height: 40, top: '32%', left: '2%'}}
              source={require('../../assets/apple.png')}
            />
          </View>
          <View>
            <Image
              style={{width: 40, height: 40, top: '32%', left: '2%'}}
              source={require('../../assets/google.png')}
            />
          </View>
        </View>
  
        <View style={{flexDirection:'row', marginTop:Rw(17), marginLeft:Rw(25)}}>
          <Text style={{fontSize:fo(2), color:colors.font1}}>Already have an Account? </Text>
          <TouchableOpacity onPress={backlogin}>
            <Text style={{fontSize:fo(2), color:colors.headerbackground}}> LOGIN </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Signup;
  
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
      
      marginTop: Rw(3),
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
     marginTop: Rw(4),
   },
  
   line: {
     flex: 1,
     height: 1,
     backgroundColor: 'black', 
     marginHorizontal: Rw(0.5), 
   },
  
  });