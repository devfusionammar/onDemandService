import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import BackButton from '../components/backbutton';
import {useNavigation} from '@react-navigation/native';
export default function AddTrip() {
  const navigation = useNavigation();
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [loding, setLoding] = useState(false);
  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate('Home');
    } else {
      // Show an alert message
      Alert.alert(
        'Validation Error',
        'Place and country are required fields.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    }
  };

  return (
    <ScreenWrapper className="flex-1">
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              AddTrip
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image className="h-72 w-72" source={require('../assets/4.png')} />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Where On Earth?
            </Text>
            <TextInput
              value={place}
              onChangeText={value => setPlace(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Which Country
            </Text>
            <TextInput
              value={country}
              onChangeText={value => setCountry(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleAddTrip}
          style={{backgroundColor: colors.button}}
          className="flex justify-center rounded-full my-6 p-3 shadow-sm mx-2">
          <Text className={`font-bold text-white text-lg text-center`}>
            Add Trip
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
