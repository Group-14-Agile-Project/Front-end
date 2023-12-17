// AboutUs.jsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const AboutUs = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={require('../assets/ucc.png')} // Replace with your logo
          style={styles.logo}
        />
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.description}>
          Welcome to our mobile app! We are dedicated to providing high-quality
          content and services to our users. Our mission is to make learning
          enjoyable and accessible for everyone.
        </Text>
        <Text style={styles.description}>
          Feel free to explore our app and discover a world of knowledge. If you
          have any questions or feedback, don't hesitate to contact us.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4', // Background color for the entire screen
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Add elevation for shadow (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutUs;
