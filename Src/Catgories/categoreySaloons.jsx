import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    Animated,
    ActivityIndicator
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
import { useNavigation } from '@react-navigation/native';
import { beautationCategories } from '../../services/beautacions'
import ScreenWrapper from '../../components/ScreenWrapper';
import { useRoute } from '@react-navigation/native';
export default function CategoreySaloon() {
    const route = useRoute();
    const navigation = useNavigation();
    const { categoryId } = route.params;
    console.log("this is id at salloon side", categoryId);
    const [bannerData, setBannerData] = useState('');
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await beautationCategories(categoryId);
                console.log('Fetched data:', data);
                setBannerData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [categoryId]);

    useEffect(() => {
        Animated.loop(
            Animated.timing(scrollX, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false,
            }),
        ).start();
    }, []);

    // Render loading state if bannerData is still null or empty
    if (!bannerData || !bannerData.data || bannerData.data.length === 0) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }
 return (
        <ScreenWrapper>
              <View  style={{height:Rh(11),width:Rw(100),marginTop:-12 ,backgroundColor:colors.headerbackground}}>
                <View style={{marginTop:Rh(5.4),marginLeft:Rw(6)}}>
               <Text style={{fontSize:fo(2.4),fontFamily:colors.fontfaimly_heding}}>Hair Cut</Text>
                <Text style={{fontSize:fo(2),fontFamily:colors.fontfaimly_text,color:colors.fontSubheadin}}>Our 4 Salons</Text>
                </View>
               </View>
        <View clasName="" style={styles.container}>
          
            
            {/* Popular Saloons  */}
            <View >
                <FlatList
                    data={bannerData.data}
                    horizontal={false}
                    pagingEnabled
                    
                    keyExtractor={(item) => item.beauticianId.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id} value
                            onPress={() => navigation.navigate('ServiceProvider')}
                        >
                            <View style={styles.bannerContainer} >
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

                                <View
                                    style={styles.SaloonItem}>

                                    <Text style={styles.saloonName}>{item.firstName} ghmvc{item.lastName}</Text>


                                    <View style={styles.PhoneContainer} className="flex-row justify-between">
                                        <Image source={require('../../assets/Icons/Callmale.png')} />
                                        <Text style={styles.Phone}>{item.Phone ? item.Phone : 920000000}</Text>
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
        </ScreenWrapper>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: Rh(2),
        marginLeft: Rw(6),
        marginBottom: Rh(3),
        backgroundColor: `${colors.background}`,

    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    FlatListContainer: {
        height: Rh(100),
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
        marginBottom: Rh(2),
    },
    itemContainer: {
        marginBottom: Rh(2), // Add bottom margin for gap between items
    },
    bannerImage: {
        width: Rw(30),
        height: Rh(9),
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
    SaloonItem: { flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' ,marginLeft: Rw(2),},

    saloonName: {
        marginLeft: Rw(1),
        marginTop: Rh(1.2),
        color: `${colors.font1}`,
        fontSize: fo(1.9),
        
    },
    Phone: {
        color: `${colors.fontSubheadin}`,
        marginLeft: Rw(1.3),
        marginTop: Rh(0.7),
    }
    ,
    ratingContainer: {
        marginLeft: Rw(0.1),
    }

});
