import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Animated} from 'react-native'
import React, { useRef, useEffect, useState } from 'react';
import { colors } from '../../theme';
import { responsiveHeight as Rh, responsiveScreenWidth as Rw,responsiveScreenFontSize as fo } from 'react-native-responsive-dimensions';
import { catitems } from '../../assets/Categories/catgorey';
export default function Catgorey() {
    const [bannerData, setBannerData] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
        
        <View 
        style={styles.container2}
        >
        <View className="flex-row justify-between items-center">
          <Text style={styles.buttontext}>
            Categories
          </Text>
          <TouchableOpacity 
           onPress={()=> navigation.navigate('AddTrip')}  
          className="p-2 bg-white border border-gray-200 rounded-full mb-2 mr-1">
            <Text style={styles.buttontext} className="font-sans" >View All</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* cursorel for categorey */}
      <View style={styles.FlatList_container}>
      <FlatList
        data={catitems}
        horizontal={true}
        pagingEnabled
        keyExtractor={(catitems) => catitems.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.bannerContainer}>
            <Image 
            style={styles.bannerImage}
            source={item.img} />
            <TouchableOpacity style={styles.exploreButton}>
              <Text style={styles.catgoreisText}>{item.categorey}</Text>
            </TouchableOpacity>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      
    </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:Rh(1),
        marginLeft:Rw(6),
        marginBottom:Rh(0),
        backgroundColor:`${colors.background}`
    },
    
    FlatList_container:{
        height: Rh(11)
    },
   
buttontext:{
    fontSize:fo(1.4),
    color:`${colors.font1}`
},

  bannerContainer: {
    width: Rw(20), // Responsive width
    height: Rw(20), // Responsive height
    alignItems: 'between',
    marginRight: Rw(0),
  },
  bannerImage: {
    width: Rw(15),
    height:Rh(7),
    borderRadius: Rw(10), // Responsive rounded edges
  },
  exploreButton:{
    marginTop:Rh(1),
  },
  catgoreisText:{
    color:`${colors.font1}`,
    fontSize:fo(2),
  }


})