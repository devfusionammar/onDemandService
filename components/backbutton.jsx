import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as fo,
} from 'react-native-responsive-dimensions';
export default function BackButton({marginRight1,marginLeft1,onpress}) {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      
      style={{backgroundColor: 'black',
      borderRadius: 50, 
      height: Rh(3), 
      width: Rw(6.2), 
      justifyContent: 'center',
      alignItems: 'center',
    marginRight:Rw(marginRight1),
    marginLeft:Rw(marginLeft1)
    }}
    onPress={onpress}
    >
      
      <ChevronLeftIcon size={30} color={"white"} />
    </TouchableOpacity>
  );
}



