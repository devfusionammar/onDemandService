import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation=useNavigation();
  return (
    <ScreenWrapper  className="flex-1 ">


        <TouchableOpacity
          onPress={()=>navigation.navigate('BottomNavigation')}
          style={{backgroundColor: colors.button}}
          className="flex justify-center item-center rounded-full my-6 p-3 shadow-sm mx-2">
          <Text className={`font-bold text-white text-lg text-center`}>
            Login
          </Text>
        </TouchableOpacity>
    
    </ScreenWrapper>
  )
}