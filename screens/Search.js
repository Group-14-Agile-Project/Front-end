import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { BASE_API_URI } from '../utils/api';
import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Search() {
  const navigation = useNavigation();
  const [errors, setErrors] = useState({});
  const [programme, setProgramme] = useState('');
  const [level, setLevel] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);


  const validateForm = () => {
    let errors = {};

   
      

  if (!programme) {
    errors.programme = "select is required";
  }

  if (!level) {
    errors.level = "select is required";
  }


  setErrors(errors);

  return Object.keys(errors).length === 0;
  }


  const handleSubmit = async () => {
    if(validateForm()){
      try {
        const response = await axios.post(`${BASE_API_URI}/app/auth/resources/`, {
            programme: programme,
            level: level,
        });

        if (response.data.length !== 0) {
            Alert.alert('Success', 'Resources Found.');
            await AsyncStorage.setItem('resources', JSON.stringify(response.data))
            
            navigation.navigate("Resources");
            setLevel("");
            setProgramme("")
            setErrors({});
          } else if (response.data.length === 0) {
            // Login failed, show an alert
            Alert.alert( 'No resources Found!!!!');
          }  // Log successful response

    } catch (error) {
        console.error('Axios Error:', error);
        setErrorMessage(error.response?.data?.message?.username[0] || 'An error occurred.');
        console.error('Axios Response Data:', error.response?.data);  // Log response data if available
    }
    setErrorMessage('')
    setErrors('')
    setProgramme('')
    setLevel('')
    //navigation.navigate('Login')

    }
    
}

  // const handleSignUp = () => {
  //   navigation.navigate('SignUp')
  // }

  return (
    <LinearGradient colors={['#02080e','#121517','#626363']} style={styles.container}>
      <SafeAreaView>
      <Image style={[styles.image, { opacity: 0.68 }]} source={require('../assets/study.jpg')} />

      <View style={styles.impose}>
        <View style={{position:"absolute"}}>
            <Image style={{width:120, height: 120, marginTop: -200}} source={require('../assets/ucc.png')}/>
        </View>
        <View style={{position: "absolute"}}>
            <Text style={{fontSize:18, marginTop: -198, marginLeft:100, color: "#fff", fontWeight: 500, }}>{"University of \n Cape Coast"}</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>

        <Text style={styles.signUpText}> Search for Resources</Text>
        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={programme}
          onChangeText={setProgramme}
          value={programme}
          onValueChange={(programme) => setProgramme(programme)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your Programme" />
          <Picker.Item label="Computer Science" value="Computer Science" />
          <Picker.Item label="Information Studies" value="Information Studies" />
          <Picker.Item label="Faculty of Educational Foundations" value="Faculty of Educational Foundations" />
          <Picker.Item label="Faculty of Science and Technology Education" value="Faculty of Science and Technology Education" />
          <Picker.Item label="Faculty of Art" value="Faculty of Art" />
        </Picker>
        </View>
        {
          errors.programme ? <Text style={styles.errorText}>{errors.programme}</Text> : null
        }


        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={level}
          onChangeText={setLevel}
          value={level}
          onValueChange={(Level) => setLevel(Level)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your Level" />
          <Picker.Item label="100" value="100" />
          <Picker.Item label="200" value="200" />
          <Picker.Item label="300" value="300" />
          <Picker.Item label="400" value="400" />
        </Picker>
        </View>
        {
          errors.level ? <Text style={styles.errorText}>{errors.level}</Text> : null
        }
        <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
          <Text style={{textAlign: "center", fontWeight: 'bold', fontSize: 18,}}>Search</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main_view:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  pickerContainer: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 308,
    color: "white",
    marginTop: 9,
    marginLeft: 32,
    height: 42,
    paddingLeft: 0,

  },

  image: {
    width: '100%',
    height: 250,
  },
  
  darkOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for the desired darkness
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
    height: 42,
    fontWeight: 600,
  },

  inputView:{
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: "center",
  },

  input: {
    borderColor: "#fff",
    borderWidth: 1,
    padding: 2,
    width: 308,
    height: 42,
    marginTop: 18,
    alignItems: "center",
    height: 42,
    fontSize: 18,
    paddingLeft: 18,
    color: "#fff",
  },

  input1: {
    marginTop: 18,
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: 18,
    width: 308,
    height: 42,
    fontSize: 18,
    color: "#fff",
  },
  
  input2: {
    marginTop: 19,
    borderColor: "#fff",
    borderWidth: 1,
    paddingLeft: 18,
    width: 308,
    height: 42,
    fontSize: 18,
    color: "#fff",
  },

  loginBtn: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 25,
    width: 130,
    marginLeft: 130,
    marginTop: 19,
    fontSize: 0,
  },

  errorText:{
    color: "red",
    fontSize: 12,
    marginBottom: -10,
    textAlign: "center",
  },

  impose:{

  }

});
