import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import BookingButtons from '../../components/bookingButton';
import {
  responsiveHeight as Rh,
  responsiveScreenWidth as Rw,
  responsiveScreenFontSize as Rf,
} from 'react-native-responsive-dimensions';
import { colors } from '../../theme';
import { useRoute } from '@react-navigation/native';

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const navigation = useNavigation();
  const route = useRoute();
  const { saloonId } = route.params;

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const onMonthChange = (month) => {
    setSelectedYear(month.year);
    setSelectedMonth(month.month + 1);
  };

  // Function to handle button press and navigate
  const handleButtonPress = (selectedTime) => {
    // Navigate to the next screen and pass selected date and time as params
    navigation.navigate('RecptBooking', {
      saloonId: saloonId,
      selectedDate: selectedDate,
      selectedTime: selectedTime.format(),
    });
  };

  // Generate buttons for each hour of the day
  const generateTimeButtons = () => {
    const buttons = [];
    for (let i = 0; i < 24; i++) {
      buttons.push(
        <TouchableOpacity
          key={i}
          style={styles.timeButtonContainer}
          onPress={() => handleButtonPress(moment().startOf('day').add(i, 'hours'))}
        >
          <Text style={styles.timeButtonText}>
            {moment().startOf('day').add(i, 'hours').format('h A')}
          </Text>
        </TouchableOpacity>
      );
    }
    return buttons;
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={`${selectedYear}-${selectedMonth.toString().padStart(2, '0')}`}
        onDayPress={onDayPress}
        onMonthChange={onMonthChange}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
        monthFormat={'MMMM yyyy'}
        hideExtraDays={true}
        disableMonthChange={false}
        firstDay={1}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
      />

      {/* Table of time buttons */}
      <View style={styles.timeButtonTable}>{generateTimeButtons()}</View>

      {/* Booking button */}
      <View style={styles.bookingButtonContainer}>
        <BookingButtons backgroundColor={colors.ServiceProvider_buttonBackground} titlenext={'Book Now'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS=='android'?Rh(0): Rh(6.3) ,
  },
  timeButtonTable: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: Rw(10),
  },
  timeButtonContainer: {
    width: '30%', // Adjust the width as needed
    marginVertical: 18,
    backgroundColor: colors.ServiceProvider_buttonBackground,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  bookingButtonContainer: {
    alignItems: 'center',
    marginTop: Rh(7),
  },
});
