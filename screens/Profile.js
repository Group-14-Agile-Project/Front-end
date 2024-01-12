import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile({}) {

  const navigation = useNavigation()

  const handleLogout = () => {
    
    navigation.navigate('Login');
    
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleAbout = () => {
    navigation.navigate('AboutUs')
  }

  const handleSupport = () => {
    navigation.navigate('SupportScreen')
  }
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data from AsyncStorage
    const fetchResources = async () => {
      try {
        const storedResources = await AsyncStorage.getItem('user');
        if (storedResources) {
          // If there are stored resources, parse and set them to the state
          setUser(JSON.parse(storedResources));
        }
      } catch (error) {
        console.error('Error retrieving resources from AsyncStorage:', error);
      }
    };

    // Call the fetchResources function when the component mounts
    fetchResources();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
      {/* <StatusBar barStyle="light-content" color="white" /> */}
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text>{user?.name}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

      <View style={{marginLeft: -140, marginTop: 30,}}>
      <TouchableOpacity style={styles.option} onPress={handleSupport}>
        <AntDesign name="questioncircleo" size={24} color="black" />
        <Text style={styles.optionText}>Support</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.option} onPress={}>
        <Entypo name="share" size={24} color="black" />
        <Text style={styles.optionText}>Share</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.option} onPress={handleAbout}>
        <FontAwesome name="info-circle" size={24} color="black" />
        <Text style={styles.optionText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => {/* Handle settings */}}>
        <AntDesign name="setting" size={24} color="black" />
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

  backButton: {
    width: 70,
    position: 'absolute',
    top: -80,
    left: 20,
    zIndex: 1,
    // backgroundColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
  },

  profileContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  editButton: {
    backgroundColor: "#1B2631",
    borderRadius: 10,
    marginLeft: 20,
    padding: 10,
    paddingHorizontal: 150,
  },

  editText: {
    color: 'white',
    fontSize: 16,
  },

  option: {
    flexDirection: 'row',
    alignItems: 'left',
    marginLeft: -50,
    marginBottom: 40,
  },

  optionText: {
    marginLeft: 15,
    fontSize: 18,
  },

  logoutButton: {
    marginTop: 'auto',
    backgroundColor: '#1B2631',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 35,
    // width: '30%',
    alignItems: 'center',
  },

  logoutText: {
    color: 'white',
    fontSize: 16,
  },
});
