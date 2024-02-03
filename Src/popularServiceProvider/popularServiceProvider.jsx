import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { colors } from '../../theme';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Entypo';
import { PopularItems } from '../../assets/popularServiceProvider/PopularServiceProvider';
import { useNavigation  } from '@react-navigation/native';
import {topBeautaion} from '../../services/beautacions'
export default function PopularServiceProvider() {
  const navigation = useNavigation();
  const [bannerData, setBannerData] = useState([ ]);

  const scrollX = useRef(new Animated.Value(0)).current;
  

  useEffect(() => {
    async function fetchData() {
      try {
        
        const data = await topBeautaion();
        setBannerData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }),
    ).start();
  }, []);
const handlePress=(reviewid)=> {
console.log('Press id is ' + reviewid);
navigation.navigate('ServiceProvider', { beauticianId: reviewid });
};

  return (
    <View clasName="" style={styles.container}>
      <View className="flex-row justify-between items-center">
        <Text style={styles.buttontext}>Popular Service Providers</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddTrip')}
          className="p-2 bg-white border border-gray-200 rounded-full mb-2 mr-1">
          <Text style={styles.buttontext} className="font-sans">
            View All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Popular Saloons  */}
      <View >
        <FlatList
          data={bannerData?.data}
          horizontal={true}
          pagingEnabled
          keyExtractor={(item) => item?.beauticianId?.toString()}
          showsHorizontalScrollIndicator={false}
          
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.beauticianId)}>
            <View style={styles.bannerContainer}>
              {item.profilePhoto ? (
                <Image
                  style={styles.bannerImage}
                  source={{ uri: `data:image/png;base64,${item.profilePhoto}` }}
                />
              ) : (
                <Image
                  style={styles.bannerImage}
                  source={require('../../assets/popularServiceProvider/popular.png')}
                />
              )}
              <View style={styles.SaloonItem}>
                <Text style={styles.saloonName}>{item.firstName} {item.lastName}</Text>
                <View style={styles.PhoneContainer} className="flex-row justify-between">
                  <Image source={require('../../assets/Icons/Callmale.png')} />
                  <Text style={styles.Phone}>{item.Phone ? item.Phone : '920000000'}</Text>
                </View>
                <View style={styles.ratingContainer} className="flex-row justify-between">
                  <Ionicons
                    name='star'
                    size={18}
                    color='#F4C01E'
                  />
                  <Text style={{ color: colors.font1 }} className="ml-1">{item.totalReviews}</Text>
                  <Text style={{ color: colors.fontSubheadin }}>({item.averageRating})</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
    marginBottom: Rh(3),
    backgroundColor: `${colors.background}`,

  },
  FlatListContainer: {
    height: Rh(100),
  },
  buttontext: {
    fontSize: fo(1.4),
    color: `${colors.font1}`,
  },
  bannerContainer: {
    width: Rw(79),
    height: Rw(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: 'between',
    marginRight: Rw(5),
    borderRadius: Rw(3),
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.2)',

  },
  bannerImage: {
    width: Rw(30),
    height: Rh(13),
    marginLeft: Rw(-2),
    borderTopLeftRadius: Rw(5.2),

    borderBottomLeftRadius: Rw(5.2),
  },
  avatarImage: {
    width: Rw(30),
    height: Rh(13),
    marginLeft: Rw(-2),
    borderTopLeftRadius: Rw(5.2),

    borderBottomLeftRadius: Rw(5.2),
  },
  SaloonItem: { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' },

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
