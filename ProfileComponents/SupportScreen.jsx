// SupportScreen.jsx

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const SupportScreen = ({ navigation }) => {
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
          source={require('../assets/support.png')} // Replace with your support icon
          style={styles.icon}
        />
        <Text style={styles.title}>Support</Text>
        <Text style={styles.description}>
          If you have any questions, concerns, or need assistance, our support
          team is here to help you. Please feel free to reach out to us.
        </Text>
        <Text style={styles.description}>
          You can contact us via email at uccstusupport@gamil.com or call our
          support hotline at +(233) 249-038-168.
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
  icon: {
    width: 120,
    height: 80,
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

export default SupportScreen;
