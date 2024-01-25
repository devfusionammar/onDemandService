import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme';

const ServiceProviderAbout = () => {
  const [activeSection, setActiveSection] = useState('');
  const renderContent = () => {
    switch (activeSection) {
      case 'About Us':
        return (
          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        );
      case 'Our Staff':
        return (
          <Text style={styles.contentText}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </Text>
        );
      case 'Open-Closed':
        return (
          <Text style={styles.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. 
          </Text>
        );
      case 'Contact Us':
        return (
          <Text style={styles.contentText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </Text>
        );
      default:
        return null;
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={() => setActiveSection('About Us')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>About Us</Text>
            <Ionicons
              name={activeSection === 'About Us' ? 'chevron-up' : 'chevron-down'}
              size={20}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        {activeSection === 'About Us' && <Text style={styles.contentText}>{renderContent()}</Text>}
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={() => setActiveSection('Our Staff')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Our Staff</Text>
            <Ionicons
              name={activeSection === 'Our Staff' ? 'chevron-up' : 'chevron-down'}
              size={20}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        {activeSection === 'Our Staff' && <Text style={styles.contentText}>{renderContent()}</Text>}
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={() => setActiveSection('Open-Closed')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Open-Closed</Text>
            <Ionicons
              name={activeSection === 'Open-Closed' ? 'chevron-up' : 'chevron-down'}
              size={20}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        {activeSection === 'Open-Closed' && <Text style={styles.contentText}>{renderContent()}</Text>}
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={() => setActiveSection('Contact Us')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Contact Us</Text>
            <Ionicons
              name={activeSection === 'Contact Us' ? 'chevron-up' : 'chevron-down'}
              size={20}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>

        {activeSection === 'Contact Us' && <Text style={styles.contentText}>{renderContent()}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  sectionContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  buttonContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  buttonText: {
   
    fontSize: 20,
    marginRight: 5,
    color: "#1a1a1a",
    fontFamily:colors.fontfaimly_heding,
    
  },
  icon: {
    color: '#333333',
  },
  contentText: {
    marginTop: 10,
    fontSize: 18,
    color: colors.fontSubheadin,
    fontFamily:colors.fontfaimly_text

  },
});

export default ServiceProviderAbout;
