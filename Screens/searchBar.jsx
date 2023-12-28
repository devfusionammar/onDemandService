import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { responsiveHeight as Rh, responsiveScreenWidth as Rw } from 'react-native-responsive-dimensions';
import { colors } from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
      <Ionicons
              name="search-sharp"
              size={25}
              color={`${colors.font1}`}
            />
        <TextInput 
          className="text-lg tracking-wide"
          placeholder="Search..."
          style={styles.input}
          placeholderTextColor={colors.placeholderText}
        />
          <Ionicons
              name="filter-circle-sharp"
              size={30}
              color={`${colors.font1}`}
            />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Rh(12),
    backgroundColor: colors.headerbackground,
  },
  searchBar: {
    flexDirection: 'row', // To align input and search icon horizontally
    alignItems: 'center', // Align items vertically in the center
    width: Rw(70), // Adjust width as needed
    height: Rh(6), // Adjust height as needed
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1, // To make the input take up remaining space
    height: '100%', // To fill the entire height of the searchBar
    marginLeft: 10, // Add spacing between the input and the search icon
    color:`${colors.font1}`,
  },
});
