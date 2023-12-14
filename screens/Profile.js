import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import IconTabs from '../Components/IconTabs';



export default function Profile({}) {

  const navigation = useNavigation()

  const handleLogout = () => {
    
    // Remove the user from AsyncStorage
    // await AsyncStorage.removeItem('user');
  
    // Navigate to the login screen
    navigation.navigate('Login');
    
  };
  

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" color="white" /> */}
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text>Emmanuel Ofori</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>

      <View style={{marginLeft: -140, marginTop: 30,}}>
      <TouchableOpacity style={styles.option} onPress={() => {/* Handle support */}}>
        <AntDesign name="questioncircleo" size={24} color="black" />
        <Text style={styles.optionText}>Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => {/* Handle share */}}>
        <Entypo name="share" size={24} color="black" />
        <Text style={styles.optionText}>Share</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => {/* Handle about us */}}>
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
