import {
  View,
   StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';

import { useIsFocused, useNavigation } from '@react-navigation/native';

import { colors } from '../theme';
import SearchBar from './searchBar';
import OfferBanner from './bannerCarsol/offerbanner';
import Catgorey from './Catgories/Catgorey';
import NearbySaloons from './NearbySallons/NearbySaloons';
import UserInfo from './Userinfo/UserInfo';
import PopularServiceProvider from './popularServiceProvider/popularServiceProvider';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    // {/*main menu*/}
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <UserInfo style={styles.userInfo} />
        <View> 
          <SearchBar />
        </View>
         {/* Banners Section */}
        <View>
          <OfferBanner />
        </View>
         {/* categoreies section  */}
        <View>
          <Catgorey />
        </View>
        <View>
          <NearbySaloons />
        </View> 
        <View>
          <PopularServiceProvider/>
        </View>

      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${colors.background}`,
  },
  userInfo: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: `${colors.background}`,
  },
});



  {/* <View style={{height: 600}}>
          <FlatList className="mx-1 "
            data={items}
            ListEmptyComponent={<EmptyList meddage={"You haven't recorded any trips yet"}/>}
            columnWrapperStyle={{
              justifyContent:"space-between"
            }}
            keyExtractor={item=>item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity onPress={()=>navigation.navigate('AddExpensesScreen')} className="bg-white p-3  rounded-xl  mb-3 shadow-sm">
                  <View>
                    <Image source={randomImage()} className="h-36 w-36  mb-2"/>
                    <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                    <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View> */}