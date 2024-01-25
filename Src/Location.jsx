import { View, Text, StyleSheet,Image } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/backbutton';
import { colors } from '../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import Buttons from '../components/Buttons';
export default function Location({navigation}) {
  return (
    <ScreenWrapper bgcolor={colors.background}>
      
      <View style={styles.contentContainer}>
        <BackButton marginRight1={0} marginLeft1={20} onpress={()=>navigation.navigate('BottomNavigation') }/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Enable Location</Text>
        </View>
       
      </View>
      <View  style={{marginLeft:Rw(12),marginTop:Rh(10)}}>
      <Image  style={{height:Rh(40),width:Rw(70)}} source={require('../assets/Location/location.png')}/>
      </View>
      <View style={styles.textEnablelocation}>
          <Text style={{color:colors.font1,textAlign:'center',fontSize: fo(2.3)}}>Enable Location Services</Text>
          <Text style={{color:colors.fontSubheadin,textAlign:'center',fontSize: fo(1.7)}}>Turn on location services so we can show {'\n'}
           you what’s nearby</Text>
        </View>
        <View style={{marginTop:Rh(10),flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
        <Buttons titlenext={"Allow Location Access"} backgroundColor1={colors.headerbackground} pressnext={()=>navigation.navigate('CurrentLocation') } />
        <View style={{ marginTop: 10 }}>
        <Buttons titlenext={"Allow Location Access"}backgroundColor1={"#E0E0E0"} />
        </View>
        </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  textContainer: {
    marginRight: 150,
    
  },
  text: {
    textAlign: 'center',
    fontSize: fo(2.3),
    color:colors.fontSubheadin
  },
  textEnablelocation: {
    textAlign: 'center',
    fontSize: fo(2.3),
    marginTop:Rh(3),
    
    color:colors.font1
  },
});
