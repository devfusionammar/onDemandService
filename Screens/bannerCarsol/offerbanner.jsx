import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import { responsiveHeight as Rh, responsiveScreenWidth as Rw } from 'react-native-responsive-dimensions';
import { catitems } from '../../assets/Categories/catgorey';
import { colors } from '../../theme';

export default function BannerCarousel() {
  const [bannerData, setBannerData] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={catitems}
        horizontal={true}
        pagingEnabled
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.bannerContainer}>
            <Image 
            style={styles.bannerImage}
            source={require("../../assets/Banner/1.png")} />
            
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Rh(19),
    marginTop:Rh(1),
    marginLeft:Rw(3),
    backgroundColor:`${colors.background}`
  },
  bannerContainer: {
    width: Rw(81), // Responsive width
    height: Rw(64), // Responsive height
    alignItems: 'between',
    marginRight: Rw(0),
  },
  bannerImage: {
    width: Rw(80),
    height:Rh(20),
    borderRadius: Rw(5), // Responsive rounded edges
  },
  explore:{
  fontSize:30,
  },
 
});
