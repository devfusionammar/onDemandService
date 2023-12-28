import { View, Text,Image,TouchableOpacity, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { colors } from '../../theme';
import { responsiveHeight,responsiveScreenWidth,responsiveFontSize, } from 'react-native-responsive-dimensions';
export default function UserInfo() {
  return (
    <View className= {"flex-row justify-left items-center p-0 "}>
        <Image  
        style={{height:responsiveHeight(6),width:responsiveScreenWidth(6),resizeMode:"cover",marginTop:responsiveHeight(1),marginLeft:responsiveScreenWidth(3.9)}}
        className={`p-6`} 
        source={require("../../assets/Icons/User.png")}/>
        
        <View className="flex-1 justify-center m-1">
        <Text className={` text-bold pl-2 pt-0`}
        style={{color:`${colors.font1}`,marginLeft:responsiveScreenWidth(2),marginTop:responsiveHeight(0),fontSize:responsiveFontSize(2.3)}}
        >Muhammad Fahim</Text>
        <Text className={` text-bold pl-2 pt-0`}
        style={{color:`${colors.fontSubheadin}`,marginLeft:responsiveScreenWidth(2),marginTop:responsiveHeight(0),fontSize:responsiveFontSize(1.5)}}
        >6km Raiwind Rd, Dubai Town</Text>
       </View>
       <View className='p-3 bg-white rounded-full border border-opacity-10 h-12 w-12 m-3'>
        <TouchableOpacity>
       <Ionicons 
              name='notifications-outline'
              size={23}
              color="black"
            />
            </TouchableOpacity>
       </View>
      </View>
  )
}