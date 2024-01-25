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
export default function NearbySaloons() {
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
        <Text style={styles.buttontext}>Categories</Text>
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
            <View style={styles.bannerContainer} >
              <Image style={styles.bannerImage} source={item.img} />

              <View
              style={styles.SaloonDistance}>
              
                  <Text style={styles.saloonName}>{item.saloname}</Text>
                 
                  <Text style={styles.aerro}>↔</Text>
                
                  <Text style={styles.distance}>{item.distance}</Text>
               
              </View>

              <View style={styles.Addres}>
              <Ionicons 
              name='navigate-sharp'
              size={23}
              color="green"
            />
           
                <Text style={styles.AddressText}>{item.Address}</Text>
              </View>
              <View>
                <Text style={{color: colors.font1}}>{item.distance}</Text>
              </View>
              <View>
                <Text style={{color: colors.font1}}>{item.rating}</Text>
              </View>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddTrip')}
                  className="p-2 bg-white border border-gray-200 rounded-full mb-2 mr-1">
                  <Text style={styles.buttontext} className="font-sans">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
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
  SaloonDistance: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  Addres:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
saloonName:{
    marginLeft:Rw(2),
    marginTop:Rh(1.2),
    color:`${colors.font1}`,
    fontSize:fo(1.9),
},
aerro:{
    color:`${colors.button}`,
    fontSize:fo(4),
    marginLeft:Rw(30),
    marginBottom:Rh(2),
},
distance:{
    color:`${colors.fontSubheadin}`,
    fontSize:fo(1.6),
    marginRight:Rw(3),
},
AddressText:{
  color:`${colors.fontSubheadin}`,
    fontSize:fo(2),
    marginLeft:Rw(30),
    marginRight:Rw(15),
}
});
