import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { colors } from '../../theme';
import { sendOTP } from '../../services/OtpService';
import { verifyOTP } from '../../services/OtpService';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
console.log(otp);
  // Function to send OTP
  const handleSendOTP = () => {
    // Call sendOTP function with the phone number
    sendOTP()
      .then(response => {
        // Handle success response if needed
        Alert.alert('Otp Sent Successfully on Your Email Address');
        console.log('OTP sent successfully:', response);
      })
      .catch(error => {
        // Handle error response
        console.error('Error sending OTP:', error);
        Alert.alert('Error', 'Failed to send OTP. Please try again.');
      });
  };

  useEffect(() => {
    // Send OTP when the component loads
    // handleSendOTP();
  }, []);

  const handleResendOTP = () => {
   return new Promise((resolve, reject) => {
      sendOTP()
        .then(response => {
          // Handle success response if needed
          Alert.alert('Otp Sent Successfully on Your Email Address');
          console.log('OTP sent successfully:', response);
          resolve(response);
        })
        .catch(error => {
          // Handle error response
          Alert.alert('Network Eroor');
          console.error('Error sending OTP:', error);
          reject(error);
        });
    });
  
  };

  const handleVerifyOTP = () => {
    verifyOTP(otp)
      .then(response => {
        navigation.navigate('BottomNavigation');
        console.log('OTP verification successful:', response);
      })
      .catch(error => {
        // Handle error response
        console.error('Error verifying OTP:', error);
        Alert.alert('Error', 'Failed to verify OTP. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter OTP"
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleResendOTP}>
        <Text style={styles.buttonText}>Resend OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={handleVerifyOTP}>
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color:colors.font1,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  secondaryButton: {
    backgroundColor: '#28a745',
  },
  secondaryButtonText: {
    color: '#fff',
  },
});

export default OtpVerification;
