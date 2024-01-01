import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';

const { width, height } = Dimensions.get('window');

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

      <View style={styles.loginlowercont}>
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

        <TouchableOpacity>
          <Buttons titlenext={'Log In'} pressnext={BottomNavigation} />
        </TouchableOpacity>
      </View>
      <View style={styles.lowertxtContainer}>
      <View style={styles.line}></View>
      <Text style={styles.EmailText}>Or Sign in with</Text>
      <View style={styles.line}></View>
      </View>
      
      <View style={styles.lowertxtContainer}>
      <View>
      <Image 
              style={{width:40, height:40, 
              top:"32%", left:"2%", padding:2, }}
              source={require("../../assets/facebook.png")}
            />
      </View>
      <View>
      <Image 
              style={{width:40, height:40, 
              top:"32%", left:"2%", padding:20, }}
              source={require("../../assets/apple.png")}
            />
      </View>
      <View>
      <Image 
              style={{width:40, height:40, 
              top:"32%", left:"2%", padding:2, }}
              source={require("../../assets/google.png")}
            />
      </View>
      </View>
      <View style={styles.lowertxtContainer}>
      <Text style= {{marginTop:80,  fontSize: width * 0.04,
   color: 'black',}} >Don't have an Account?</Text>
      <TouchableOpacity onPress={handleSignUp}>
            {/* Add your Forgot Password functionality here */}
            <Text style= {{marginTop:80,  fontSize: width * 0.04,
   color: '#4C79BC',}}>SIGN UP?</Text>
          </TouchableOpacity>
          </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontSize: 30,
    marginTop:40,
    fontWeight: 'bold',   
    textAlign: 'center',
  },

  h2: {
   fontSize: 20,
   backgroundColor: '#4C79BC',
   color: 'white',
   marginTop:40,
   borderRadius:5,
   padding:40,
   textAlign: 'center',
  },

  forgetsaveContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: width * 0.02,
   marginHorizontal: width * 0.02,
 },

 saveMeText: {
   fontSize: width * 0.04,
   color: 'black',
 },

 forgetPasswordText: {
   fontSize: width * 0.04,
   color: 'black',
 },

  lowertxtContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   marginTop: 20,
 },

 line: {
   flex: 1,
   height: 1,
   backgroundColor: 'black', 
   marginHorizontal: width * 0.02, 
 },
  EmailText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    padding:0
  },
  
  lowertxt: {
    fontSize: 20,
    backgroundColor: '#4C79BC',
    marginTop: 5,
    borderRadius: 5,
    borderStyle: "solid",
    padding: 40,
    width: '100%',
    textAlign: 'center',
  },

  loginlowercont: {
    borderRadius: width * 0.03,
    padding: width * 0.02,
    width: '90%',
    marginTop: 10,
  },

  inputContainer: {
    
    marginTop: 10,
  },

  icon: {
    position: 'absolute',
    width: width * 0.1,
    height: width * 0.1,
    top: '32%',
    left: '2%',
  },
});