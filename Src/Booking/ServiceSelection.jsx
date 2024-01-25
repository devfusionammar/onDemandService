import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme';

const ServiceSelection = () => {
  const [activeSection, setActiveSection] = useState('');

  const [selectedServices, setSelectedServices] = useState([]);

  const renderContent = () => {
    switch (activeSection) {
      case 'Hair Cut':
        return renderSubCategory([
          { name: 'Classic Hair Cut', price: '$20' },
          { name: 'Modern Hair Cut', price: '$25' },
          { name: 'Premium Hair Cut', price: '$30' },
        ]);
      case 'Beard':
        return renderSubCategory([
          { name: 'Beard Trim', price: '$15' },
          { name: 'Beard Shaping', price: '$20' },
        ]);
      case 'Facials':
        return renderSubCategory([
          { name: 'Basic Facial', price: '$30' },
          { name: 'Deep Cleansing Facial', price: '$40' },
        ]);
      case 'Hair Color':
        return renderSubCategory([
          { name: 'Single Color', price: '$40' },
          { name: 'Highlights', price: '$50' },
        ]);
      default:
        return null;
    }
  };

  const renderSubCategory = (subCategories) => {
    return subCategories.map((subCategory, index) => (
      <View key={index} style={styles.subCategoryContainer}>
        <Text style={styles.subCategoryText}>{subCategory.name}</Text>
        <Text style={styles.priceText}>{subCategory.price}</Text>
        <TouchableOpacity onPress={() => handleSelectService(subCategory)}>
          <Ionicons
            name={
              selectedServices.some((service) => service.name === subCategory.name)
                ? 'radio-button-on'
                : 'radio-button-off'
            }
            size={20}
            style={styles.radioIcon}
          />
        </TouchableOpacity>
      </View>
    ));
  };

  const handleSelectService = (service) => {
    if (selectedServices.some((selected) => selected.name === service.name)) {
      setSelectedServices(selectedServices.filter((selected) => selected.name !== service.name));
    } else {
      setSelectedServices([...selectedServices, service]);
    }

    // Log the selected services
    console.log('Selected Services:', selectedServices);
  };

  const handleToggleSection = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggleSection('Hair Cut')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Hair Cut</Text>
          <Ionicons
            name={activeSection === 'Hair Cut' ? 'chevron-up' : 'chevron-down'}
            size={20}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      {activeSection === 'Hair Cut' && renderContent()}

      {/* Repeat for other categories */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 20,
    marginRight: 5,
    color: '#1a1a1a',
    fontFamily: colors.fontfaimly_heding,
  },
  icon: {
    color: '#333333',
  },
  subCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  subCategoryText: {
    fontSize: 16,
    color: '#1a1a1a',
    fontFamily: colors.fontfaimly_heding,
  },
  priceText: {
    fontSize: 16,
    color: colors.fontSubheadin,
    fontFamily: colors.fontfaimly_text,
  },
  radioIcon: {
    color: colors.primary,
  },
});

export default ServiceSelection;
