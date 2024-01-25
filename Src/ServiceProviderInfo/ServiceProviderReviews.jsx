import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../theme';

const ServiceProviderReviews = () => {
  // Dummy data for reviews
  const reviews = [
    {
      id: '1',
      name: 'John Doe',
      rating: 4,
      time: '1 day ago',
      review: 'Great service! I loved the experience.',
    },
    {
      id: '2',
      name: 'Jane Smith',
      rating: 5,
      time: '2 days ago',
      review: 'Excellent service and friendly staff.',
    },
    // Add more reviews as needed
  ];

  return (
    <View style={styles.container}>
      {reviews.map((review) => (
        <View key={review.id} style={styles.reviewContainer}>
          {/* Left side image */}
          <Image source={require('../../assets/profile.png')} style={styles.image} />

          {/* Center content (name, stars, review) */}
          <View style={styles.contentContainer}>
            <Text style={styles.name}>{review.name}</Text>
            {/* Display stars based on the rating */}
            <View style={styles.starContainer}>
              {Array.from({ length: review.rating }, (_, index) => (
                <Text key={index} style={styles.star}>
                  ⭐
                </Text>
              ))}
            </View>
            <Text style={styles.reviewText}>{review.review}</Text>
          </View>

          {/* Right side time */}
          <Text style={styles.time}>{review.time}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 16,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
  },
  name: {
    color: colors.font1,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  star: {
    color: '#F4C01E',
    fontSize: 16,
    marginRight: 4,
  },
  reviewText: {
    color: colors.font1,
    fontSize: 14,
  },
  time: {
    color: '#B5B5B5',
    fontSize: 12,
  },
});

export default ServiceProviderReviews;
