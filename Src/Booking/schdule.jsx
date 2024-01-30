import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { colors } from '../../theme';
export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const onMonthChange = (month) => {
    setSelectedYear(month.year);
    setSelectedMonth(month.month);
  };

  const daysInMonth = Array.from(Array(moment(`${selectedYear}-${selectedMonth}`, 'YYYY-MM').daysInMonth()).keys());

  // Generate buttons for each hour of the day
  const generateTimeButtons = () => {
    const buttons = [];
    for (let i = 0; i < 24; i++) {
      buttons.push(
        <View key={i} style={styles.timeButtonContainer}>
          <Button title={moment().startOf('day').add(i, 'hours').format('h A')} onPress={() => console.log('Pressed')} />
        </View>
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
      <FlatList
        data={daysInMonth}
        keyExtractor={(item) => item.toString()}
        horizontal={true}
        contentContainerStyle={styles.dateList}
        renderItem={({ item }) => (
          <View style={styles.dayContainer}>
            <Text>{moment(`${selectedYear}-${selectedMonth}-${item + 1}`, 'YYYY-MM-DD').format('ddd, D')}</Text>
          </View>
        )}
      />
      {/* Table of time buttons */}
      <View style={styles.timeButtonTable}>
        {generateTimeButtons()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  dateList: {
    justifyContent: 'center',
  },
  dayContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 35,
  },
  timeButtonTable: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 30,
    
  },
  timeButtonContainer: {
    width: '23%',
    marginVertical: 21,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
