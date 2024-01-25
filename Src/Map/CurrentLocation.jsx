import { View, Text, StyleSheet,Image,Platform } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import BackButton from '../../components/backbutton';
import { colors } from '../../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import Buttons from '../../components/Buttons';
import SearchBar from './MapSearchBar';
export default function CurrentLocation({navigation}) {
  return (
    <ScreenWrapper bgcolor={colors.background} >
      
      <View style={styles.contentContainer}>
        <BackButton marginRight1={2} marginLeft1={8}  onpress={()=>navigation.navigate('Location') }/>
        <View style={styles.textContainer}>
          <SearchBar/>
        </View>
       
      </View>
      <View  style={{height:Rh(4),width:Rw(4),marginLeft:Rw(9),marginTop:Rh(5)}}>
      <Image style={{height:Rh(60),width:Rw(80)}} source={require('../../assets/Location/currentlocation.png')}/>
      </View>
     
        <View style={styles.buttoncontainer}>
        <Buttons titlenext={"Countinue"}backgroundColor1={colors.headerbackground} pressnext={()=>navigation.navigate('BottomNavigation')} />
        

        </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.OS === 'android' ? { marginTop: Rh(5) } : {}
    
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
    marginTop:Rh(35),
    
    color:colors.font1
  },
buttoncontainer:{
    marginTop:Rh(64),
    marginLeft:Rw(25),
}
});
