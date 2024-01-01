import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import Input from '../../components/Input';
  import Buttons from '../../components/Buttons';
  
  const { width, height } = Dimensions.get('window');
  
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
  
          <TouchableOpacity>
            <Buttons titlenext={'Register'} pressnext={backlogin} />
          </TouchableOpacity>
        </View>
  
        <View style={styles.lowertxtContainer}>
          <View style={styles.line}></View>
          <Text style={styles.EmailText}>Or Register with</Text>
          <View style={styles.line}></View>
        </View>
  
        <View style={styles.lowertxtContainer}>
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                top: '32%',
                left: '2%',
                padding: 2,
              }}
              source={require('../../assets/facebook.png')}
            />
          </View>
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                top: '32%',
                left: '2%',
                padding: 20,
              }}
              source={require('../../assets/apple.png')}
            />
          </View>
          <View>
            <Image
              style={{
                width: 40,
                height: 40,
                top: '32%',
                left: '2%',
                padding: 2,
              }}
              source={require('../../assets/google.png')}
            />
          </View>
        </View>
  
        <View style={styles.lowertxtContainer}>
          <Text style={{ marginBottom: 100, fontSize: width * 0.04, color: 'black' }}>
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={backlogin}>
            {/* Add your Forgot Password functionality here */}
            <Text style={{ marginBottom: 100, fontSize: width * 0.04, color: '#4C79BC' }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Signup;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    loginText: {
      fontSize: 30,
      marginTop: 100,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    h2: {
      fontSize: 20,
      backgroundColor: '#4C79BC',
      color: 'white',
      marginTop: 20,
      borderRadius: 5,
      padding: 40,
      textAlign: 'center',
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
      padding: 0,
    },
  
    loginlowercont: {
      borderRadius: width * 0.03,
      padding: width * 0.02,
      width: '90%',
      marginTop: 10,
    },
  
  
  });