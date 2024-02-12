import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Animated, ActivityIndicator } from 'react-native';
import { colors } from '../../theme';
import { responsiveHeight as Rh, responsiveScreenWidth as Rw, responsiveScreenFontSize as fo } from 'react-native-responsive-dimensions';
import { upcomingBooking } from '../../services/bookingconfrm';
export default function UpComming() {
    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await upcomingBooking();
                console.log('Fetched data:', data);
                setBannerData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
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
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.headerbackground} />
            </View>
        );
    }
    return (
        <View style={styles.container}>
           
                <FlatList
                    data={bannerData?.bookings}
                    horizontal={false}
                    pagingEnabled
                    keyExtractor={item => item._id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.bannerContainer}>
                            {item?.Beautician?.ProfiePhoto ? (
                                <Image
                                    style={styles.bannerImage}
                                    source={{ uri: `data:image/png;base64,${item.Beautician?.ProfiePhoto}` }}
                                />
                            ) : (
                                <Image
                                    style={styles.bannerImage}
                                    source={require('../../assets/popularServiceProvider/popular.png')}
                                />
                            )}

                            <View style={styles.SaloonItem}>
                                <Text style={styles.saloonName}>{item.Beautician.FirstName} {item.Beautician.LastName}</Text>

                                <View style={styles.PhoneContainer}>
                                    <Image source={require('../../assets/Icons/Callmale.png')} />
                                    <Text style={styles.Phone}>{item.Beautician.PhoneNo}</Text>
                                </View>

                                <View style={styles.ratingContainer}>
                                    <Text style={{ color: colors.fontSubheading, textAlign: 'center', fontSize: fo(2) }}>{item.Status}</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '1%' }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('AddTrip')}
                                    style={{ padding: 8, backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', borderRadius: 100, marginBottom: 2, marginRight: 1 }}>
                                    <Text style={styles.buttontext}>View</Text>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        fontSize: fo(1.4),
        color: colors.font1,
    },
    bannerContainer: {
        width: "97%",
        height: Rw(30),
        flexDirection: 'row',
        marginTop: Rh(2),
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'between',
        marginRight: Rw(10),
        marginLeft: Rw(2.4),
        borderRadius: Rw(3),
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.2)',
        backgroundColor: colors.background,
    },
    bannerImage: {
        width: Rw(35),
        height: Rh(13.5),
        marginLeft: Rw(-2),
        borderTopLeftRadius: Rw(5.2),
        borderBottomLeftRadius: Rw(5.2),
    },
    SaloonItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    saloonName: {
        marginLeft: Rw(2),
        marginTop: Rh(1.2),
        color: colors.font1,
        fontSize: fo(1.9),
    },
    Phone: {
        color: colors.fontSubheading,
        marginLeft: Rw(2),
        marginTop: Rh(0.7),
    },
    PhoneContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    ratingContainer: {
        backgroundColor: colors.headersubGround,
        borderRadius: 10,
        width: Rw(23),
        height: Rh(3),
    },
});
