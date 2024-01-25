import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';

export default function BackButton({ marginRight1, marginLeft1, onPress }) {
  const marginRight = isNaN(marginRight1) ? 0 : Rw(marginRight1);
  const marginLeft = isNaN(marginLeft1) ? 0 : Rw(marginLeft1);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'black',
        borderRadius: 50,
        height: Rh(3),
        width: Rw(6.2),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight,
        marginLeft,
      }}
      onPress={onPress}
    >
      <ChevronLeftIcon name={'caret-back'} size={30} color={'white'} />
    </TouchableOpacity>
  );
}
