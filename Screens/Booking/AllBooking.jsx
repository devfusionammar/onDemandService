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
export default function AllBooking() {
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
         
            
            {/* Popular Saloons  */}
            <View >
                <FlatList
                    data={PopularItems}
                    horizontal={false}
                    pagingEnabled
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
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
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false },
                    )}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: Rh(1),
        
        marginBottom: Rh(3),
       

    },
    FlatListContainer: {
        height: Rh(100),
    },
    buttontext: {
        fontSize: fo(1.4),
        color: `${colors.font1}`,
    },
    bannerContainer: {
        width: "100%",
        height: Rw(20),
        flexDirection: 'row',
        marginTop: Rh(2),
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'between',
        marginRight: Rw(5),
        borderRadius: Rw(3),
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.2)',
        backgroundColor: `${colors.background}`,

    },
    bannerImage: {
        width: Rw(30),
        height: Rh(9.8),
        marginLeft: Rw(-2),
        borderTopLeftRadius: Rw(5.2),

        borderBottomLeftRadius: Rw(5.2),
    },
    SaloonItem: { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' },

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
