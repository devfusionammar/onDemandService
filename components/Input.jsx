import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { colors } from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
const Input = ({  placeholder, is_password, onChangeText,right }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container} >
      <TextInput
        style={styles.logininput}
        placeholder={placeholder}
        placeholderTextColor={colors.font1}
        secureTextEntry={!showPassword && is_password}
        onChangeText={onChangeText}
        disableFullscreenUI={false}
      />
      {is_password && (
        <TouchableOpacity style={{ top: Rh(1.4), position: 'absolute',right:right,}} onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={25} color={'black'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  logininput: {
    fontSize: fo(1.8),
    marginLeft: Rh(5),
    borderWidth: Rw(0.2),
    borderColor: 'black',
    borderRadius: 10,
    opacity: 0.3,
    width: Rw(80),
    padding: Rh(1.7),
    color: '#050008',
    fontWeight:'bold',
    
  },
  iconContainer: {
    position: 'absolute',
    right: Rw(10),
    top: Rh(1.4),
  },
});

export default Input;
