import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { colors } from '../../theme';
const AboutUs = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to Our Company</Text>
          <Text style={styles.subtitle}>Learn More About Us</Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Our Story</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consectetur leo et ante volutpat, vel congue purus interdum. Ut in
          turpis at sem tincidunt tristique nec nec magna. Nullam cursus turpis
          nec erat scelerisque bibendum.
        </Text>
        <Text style={styles.sectionText}>
          Suspendisse potenti. Nam ullamcorper vehicula sapien, vitae fringilla
          urna tristique vel. Sed ut lectus consectetur, ullamcorper erat eget,
          facilisis turpis.
        </Text>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          consectetur leo et ante volutpat, vel congue purus interdum. Ut in
          turpis at sem tincidunt tristique nec nec magna. Nullam cursus turpis
          nec erat scelerisque bibendum.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: colors.headerbackground,
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    color:colors.font1,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:colors.font1,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    color:colors.fontSubheadin,
  },
});

export default AboutUs;
