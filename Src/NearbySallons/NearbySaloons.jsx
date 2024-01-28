import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {colors} from '../../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NearbyItems} from '../../assets/NearbySaloons/NearbySaloons';
import { useNavigation } from '@react-navigation/native';
 const NearbySaloons=()=> {
  const navigation = useNavigation();
  const [bannerData, setBannerData] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
    ).start();
  }, []);
  return (
    <View clasName="" style={styles.container}>
      <View className="flex-row justify-between items-center">
        <Text style={styles.buttontext}>Nearby Saloones</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddTrip')}
          className="p-2 bg-white border border-gray-200 rounded-full mb-2 mr-1">
          <Text style={styles.buttontext} className="font-sans">
            View All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Neaby Saloons  */}
      <View >
        <FlatList
          data={NearbyItems}
          horizontal={true}
          pagingEnabled
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id} value
            onPress={()=>navigation.navigate("ServiceProvider")}
            >
            <View style={styles.bannerContainer} >
              <Image style={styles.bannerImage} source={item.img} />
              
              <View
                style={styles.SaloonItem}>

                <Text style={styles.saloonName}>{item.saloname}</Text>


                <View style={styles.PhoneContainer} className="flex-row justify-between">
                  <Image source={require('../../assets/Icons/Callmale.png')} />
                  <Text style={styles.Phone}>{item.Pjone}</Text>
                </View>
                <View style={styles.ratingContainer} className="flex-row justify-between">
                  <Ionicons
                    name='star'
                    size={18}
                    color='#F4C01E'
                  />

                  <Text style={{ color: colors.font1 }} className="ml-1">{item.rating}</Text>
                  <Text style={{ color: colors.fontSubheadin }}>({item.review})</Text>

                </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: Rh(1),
    marginLeft: Rw(6),
    marginBottom: Rh(0),
    backgroundColor: `${colors.background}`,
    
  },
  FlatListContainer:{
    height:Rh(100),
   

  },
  buttontext: {
    fontSize: fo(1.4),
    color: `${colors.font1}`,
  },
  bannerContainer: {
    width: Rw(79), // Responsive width
    height: Rw(64), // Responsive height
    alignItems: 'between',
    marginRight: Rw(5),
    
    borderRadius: Rw(3), // Add a rounded border with a responsive radius
    borderWidth: 1, // Add a border width
    borderColor: 'rgba(128, 128, 128, 0.2)',
    
  },
  bannerImage: {
    width: Rw(82.5),
    height: Rh(19),
    marginLeft:Rw(-2),
    borderTopLeftRadius: Rw(5.2), 
  borderTopRightRadius: Rw(5.2),
  },
  SaloonItem: { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' ,marginLeft:Rw(2.4)},

  saloonName: {
    marginLeft: Rw(2),
    marginTop: Rh(1.2),
    color: `${colors.font1}`,
    fontSize: fo(1.9),
  },
  Phone: {
    color: `${colors.fontSubheadin}`,
    marginLeft: Rw(2),
    marginTop: Rh(0.7),
  }
  ,
  PhoneContainer: {

  }
});
export default NearbySaloons;