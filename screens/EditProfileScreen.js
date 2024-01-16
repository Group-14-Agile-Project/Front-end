import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Button , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_API_URI } from '../utils/api';

import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('')
  const [college, setCollege] = useState('')
  const { initialName } = route.params; // Get the initial name from route.params
  const [image, setImage] = useState(null);

  console.log(name, college)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = async() => {
    try {
      const accessToken = await AsyncStorage.getItem('access')
      console.log('Access Token:', accessToken);
      if(accessToken){
        const response = await axios.post(`${BASE_API_URI}/app/auth/profile/`, {
          name,
          college,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          }
        }
        );
  
        if (response.status === 200) {
          Alert.alert('Success', 'You have successfully changed your Profile details.');
          navigation.navigate('Profile');
          onChangeId("");
          setErrors({});
        } else {
          // Login failed, show an alert
          Alert.alert('Profile update error try again');
        }
      }
     
    } catch (error) {
      // Alert.alert('Login Failed', 'Invalid credentials. Please check your ID or PIN.');
      // console.error('Axios Error:', error);
      console.log(error)
      // console.error('Axios Response Data:', error.response?.data);
      // Handle other errors if needed
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
      <TextInput
        style={styles.editInput}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='Edit Name'
      />

      <TextInput
        style={styles.editInput}
        value={college}
        onChangeText={(text) => setCollege(text)}
        placeholder='Edit college'
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
        <Button title="Choose an image" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  editInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 300,

  },

  saveButton: {
    backgroundColor: '#1B2631',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    paddingHorizontal: 150,
  },

  saveText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditProfileScreen;
