import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { BASE_API_URI } from '../utils/api';
import axios from 'axios';
import { Alert } from 'react-native';



export default function SignUp() {
  const navigation = useNavigation();

  
  const [name, onChangeName] = useState('');
  const [userId, onChangeId] = useState('');
  const [pin, onChangePin] = useState('');
  const [errors, setErrors] = useState({});
  const [college, setCollege] = useState('');
  const [falculty, setFalculty] = useState('');
  const [dept, setDept] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);


  const validateForm = () => {
    let errors = {};

    if (!userId) {
      errors.userId = 'ID is required';
    } else if (userId.length !== 5) {
      errors.userId = 'ID must be 5 characters';
    } else if (!/^\d+$/.test(userId)) {
      errors.userId = 'ID must contain only numbers';
    }

    if (!pin) {
      errors.pin = 'PIN is required';
  } else if (pin.length < 3) {
      errors.pin = 'PIN must be at least 8 characters';
  }

  if (!name) {
    errors.name = "Name is required";
  }

  if (!college){
    errors.college = "input is required";
  }

  if (!falculty) {
    errors.falculty = "select is required";
  }

  if (!dept) {
    errors.dept = "select is required";
  }

  setErrors(errors);

  return Object.keys(errors).length === 0;
  }


  const handleSubmit = async () => {
    if(validateForm()){
      try {
        const response = await axios.post(`${BASE_API_URI}/app/auth/sign_up/`, {
            username: userId,
            name: name,
            college: college,
            falculty: falculty,
            department: dept,
            password: pin,
        });
        if(response.status === 200){
          Alert.alert("Success", "Yidana")
          navigation.navigate('Login')
        }
        if(response.status === 208){
          Alert.alert("Warning", "OFori")
        }

        console.log(response.data);  // Log successful response
    } catch (error) {
        console.error('Axios Error:', error);
        setErrorMessage(error.response?.data?.message?.username[0] || 'An error occurred.');
        console.error('Axios Response Data:', error.response?.data);  // Log response data if available
    }finally{
      setCollege('')
    setDept('')
    setErrorMessage('')
    setFalculty('')
    setErrors('')
    onChangeId('')
    onChangeName('')
    onChangePin('')
    }
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
        {
    errorMessage && Alert.alert(`User ID ${userId} Already Exist`)
  }
        <Text style={styles.signUpText}> Create your account</Text>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Enter your Name"
            placeholderTextColor="#a09d9e"
          />
        </View>
        {
          errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null
        }

        <View style={styles.inputView}>
          <TextInput 
            style={styles.input1}
            onChangeText={onChangeId}
            value={userId}
            placeholder="Enter Student ID"
            placeholderTextColor="#a09d9e"
            keyboardType="numeric"
          />
        </View>
        {
          errors.userId ? <Text style={styles.errorText}>{errors.userId}</Text> : null
        }

        <View style={styles.inputView}>
          <TextInput 
            style={styles.input2}
            onChangeText={onChangePin}
            value={pin}
            placeholder="Enter a Pin"
            placeholderTextColor="#a09d9e"
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>
        {
          errors.pin ? <Text style={styles.errorText}>{errors.pin}</Text> : null
        }

        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={college}
          onChangeText={setCollege}
          value={college}
          onValueChange={(College) => setCollege(College)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your College" />
          <Picker.Item label="College of Distance Education" value="College of Distance Education" />
          <Picker.Item label="College of Education Studies" value="College of Education Studies" />
          <Picker.Item label="College of Humanities and Legal Studies" value="College of Humanities and Legal Studies" />
          <Picker.Item label="College of Agriculture and Natural Sciences" value="College of Agriculture and Natural Sciences" />
          <Picker.Item label="College of Graduate Studies" value="College of Graduate Studies" />
        </Picker>
        </View>
        {
          errors.college ? <Text style={styles.errorText}>{errors.college}</Text> : null
        }

          <View style={styles.pickerContainer}>
          <Picker
            selectedValue={dept}
            onChangeText={setDept}
            value={dept}
            onValueChange={(Department) => setDept(Department)}
            style={styles.pickerInput}
          >
            <Picker.Item label="Select your Department"/>
            <Picker.Item label="Department of accounting" value="Department of accounting" />
            <Picker.Item label="Department of finance" value="Department of finance" />
            <Picker.Item label="Department of Human Resource Management" value="Department of Human Resource Management" />
            <Picker.Item label="Department of Management" value="Department of Management" />
            <Picker.Item label="Department of Marketing and Supply Chain Management" value="Department of Marketing and Supply Chain Management" />
          </Picker>
          </View>
          {
            errors.dept ? <Text style={styles.errorText}>{errors.dept}</Text> : null
          }
        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={falculty}
          onChangeText={setFalculty}
          value={falculty}
          onValueChange={(Falculty) => setFalculty(Falculty)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your Falculty" />
          <Picker.Item label="Faculty of Social Sciences" value="Faculty of Social Sciences" />
          <Picker.Item label="Faculty of Law" value="Faculty of Law" />
          <Picker.Item label="Faculty of Educational Foundations" value="Faculty of Educational Foundations" />
          <Picker.Item label="Faculty of Science and Technology Education" value="Faculty of Science and Technology Education" />
          <Picker.Item label="Faculty of Art" value="Faculty of Art" />
        </Picker>
        </View>
        {
          errors.falculty ? <Text style={styles.errorText}>{errors.falculty}</Text> : null
        }


        <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
          <Text style={{textAlign: "center", fontWeight: 'bold', fontSize: 18,}}>Submit</Text>
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
