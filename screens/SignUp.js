import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Picker} from '@react-native-picker/picker';

export default function SignUp() {
  const [selectedItem, setSelectedItem] = useState('');
  const [name, onChangeName] = React.useState('');
  const [userId, onChangeId] = React.useState('');
  const [pin, onChangePin] = React.useState('');

  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#a59d9e']} style={styles.container}>
      <Image style={styles.image} source={require('../assets/study.jpg')} />
      <View style={styles.contentContainer}>
        <Text style={styles.signUpText}>Create your account</Text>
        <View>
          <TextInput 
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Enter Name"
            placeholderTextColor="#a09d9e"
          />
        </View>

        <View>
          <TextInput 
            style={styles.input1}
            onChangeText={onChangeId}
            value={userId}
            placeholder="Enter Student ID"
            placeholderTextColor="#a09d9e"
          />
        </View>

        <View>
          <TextInput 
            style={styles.input2}
            onChangeText={onChangePin}
            value={pin}
            placeholder="Enter a Pin"
            placeholderTextColor="#a09d9e"
          />
        </View>
        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your College" value="" />
          <Picker.Item label="Football" value="football" />
          <Picker.Item label="Baseball" value="baseball" />
          <Picker.Item label="Hockey" value="hockey" />
          <Picker.Item label="Hockey" value="hockey" />
        </Picker>
        </View>
        
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerContainer: {
    borderColor: "#fff",
    borderWidth: 1,
    height: 35,
    width: 308,
    color: "white",
    marginTop: 19,

  },

  image: {
    width: '100%',
    height: 250,
  },

  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  signUpText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
  },

  pickerInput: {
    marginTop: 20,
    marginTop: -10,
    borderWidth: 1,
    color: '#a09d9e', 
  },

  input: {
    borderColor: "#fff",
    borderWidth: 1,
    padding: 2,
    width: 308,
  },

  input1: {
    marginTop: 19,
    borderColor: "#fff",
    borderWidth: 1,
    padding: 2,
    width: 308,
  },
  
  input2: {
    marginTop: 19,
    borderColor: "#fff",
    borderWidth: 1,
    padding: 2,
    width: 308,
  }

});
