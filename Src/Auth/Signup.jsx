import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, ScrollView, Alert } from 'react-native';
import Input from '../../components/Input';
import Buttons from '../../components/Buttons';
import ScreenWrapper from '../../components/ScreenWrapper';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import { colors } from '../../theme';
import { createUser } from '../../services/apiauth';

const Signup = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    PhoneNO: '',
    Username: '',
  });

  const handleSignUp = () => {
    // Simple validation checks
    console.log('+++');
    if (!formData.FirstName || !formData.LastName || !formData.Email || !formData.Password || !formData.Username) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.Email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Password validation
    if (formData.Password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    createUser(formData)
      .then((data) => {
        console.log('Signup successful:', data);
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Signup error:', error);
        Alert.alert('Error', 'Signup failed: ' + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
        <View style={{backgroundColor:colors.topbackground,height:Rh(8),width:'100%',marginTop:Rh(1.3)}}>
        <Text style={styles.loginText}>Register</Text> 
        </View>
          <Text style={styles.h2}>
            Register to your account to access all the features in Barber Shop
          </Text>

          <View style={styles.loginlowercont}>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>First Name</Text>
              <Input
                placeholder={'Enter your First Name'}
                onChangeText={(text) => setFormData({ ...formData, FirstName: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Last Name</Text>
              <Input
                placeholder={'Enter your Last name'}
                onChangeText={(text) => setFormData({ ...formData, LastName: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Email</Text>
              <Input
                placeholder={'Enter Your Email'}
                onChangeText={(text) => setFormData({ ...formData, Email: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>UserName</Text>
              <Input
                placeholder={'Enter Usename'}
                onChangeText={(text) => setFormData({ ...formData, Username: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Password</Text>
              <Input
                placeholder={'Enter Password'}
                is_password={true}
                onChangeText={(text) => setFormData({ ...formData, Password: text })}
                right={Rw(10.2)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Phone</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Input
                placeholder={'Enter phone number'}
                onChangeText={(text) => setFormData({ ...formData, PhoneNo: text })}
              />
              </View>
            </View>
          </View>

          {isLoading ? (
            <ActivityIndicator size="large" color={colors.headerbackground} />
          ) : (
            <TouchableOpacity style={{ marginTop: Rw(8), marginLeft: Rw(0) }} >
                <Buttons
                  pressnext={handleSignUp}
                  titlenext={'Register'}
                  backgroundColor1={colors.headerbackground}
                  fontcolor={colors.background}
                />
              </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 0,
  },
  loginText: {
    fontSize: fo(3),
    marginTop: Rw(5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h2: {
    fontSize: fo(2.2),
    backgroundColor: colors.headerbackground,
    color: colors.background,
    marginTop: Rw(0),
    padding: 40,
    textAlign: 'center',
    color:'black',
    height:Rh(14)
  },
  inputContainer: {
    marginTop: Rw(3),
  },
  EmailText: {
    fontSize: fo(1.3),
    color: colors.font1,
    fontWeight: 'bold',
    marginLeft: Rw(10),
    marginBottom:Rh(1)
  },
});
