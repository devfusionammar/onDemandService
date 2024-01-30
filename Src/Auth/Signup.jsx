import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, ScrollView } from 'react-native';
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
  const [isLoding, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    PhoneNO: '',
    Username: '',
  });

  const [errors, setErrors] = useState({});

  const backlogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    const validationErrors = validateFormData(formData);
    console.log("form data is", formData)
    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
    setisLoading(true)
    createUser(formData)
      .then((data) => {
        console.log('Signup successful:', data);
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Signup error:', error);
        alert('Signup failed: ' + error.message);
      })
      .finally(() => {
        setisLoading(false);
      });

  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.FirstName.trim()) {
      errors.FirstName = 'Full Name is required';
    }

    if (!data.Email.trim()) {
      errors.Email = 'Email is required';
    } else if (!isValidEmail(data.Email.trim())) {
      errors.Email = 'Invalid email format';
    }

    if (!data.Password.trim()) {
      errors.Password = 'Password is required';
    } else if (data.Password.trim().length < 6) {
      errors.Password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (

    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.loginText}>Register</Text>
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
              {errors.fullName && <Text style={styles.errorText}>{errors.FirstName}</Text>}
            </View>
          </View>
          <View style={styles.loginlowercont}>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Last Name</Text>
              <Input
                placeholder={'Enter your Last name'}
                onChangeText={(text) => setFormData({ ...formData, LastName: text })}
              />
              {errors.fullName && <Text style={styles.errorText}>{errors.FirstName}</Text>}
            </View>
          </View>
          <View style={styles.loginlowercont}>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Email</Text>
              <Input
                placeholder={'Enter Your Email'}
                onChangeText={(text) => setFormData({ ...formData, Email: text })}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>UserName</Text>
              <Input
                placeholder={'Enter Usename'}
                onChangeText={(text) => setFormData({ ...formData, Username: text })}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Password</Text>
              <Input
                placeholder={'Enter Password'}
                is_password={true}
                onChangeText={(text) => setFormData({ ...formData, Password: text })}
              />
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.EmailText}>Phone</Text>
              <Input
                placeholder={'Enter phone number'}
                onChangeText={(text) => setFormData({ ...formData, PhoneNo: text })}
              />

            </View>

            {isLoding ? (<ActivityIndicator size="large" color={colors.headerbackground} />) : (
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
    marginTop: Rw(8),
    fontWeight: 'bold',
    textAlign: 'center',
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

    marginTop: Rw(3),
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
    marginTop: Rw(4),
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: Rw(0.5),
  },

});
