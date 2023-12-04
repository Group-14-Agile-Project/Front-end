import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {
  const navigation = useNavigation();

  
  const [name, onChangeName] = React.useState('');
  const [userId, onChangeId] = React.useState('');
  const [pin, onChangePin] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [college, setCollege] = useState('');
  const [falculty, setFalculty] = React.useState('');
  const [dept, setDept] = React.useState('');
  const [level, setLevel] = React.useState('');
 

  const validateForm = () => {
    let errors = {};

    if (!userId) {
      errors.userId = 'ID is required';
    } else if (userId.length !== 8) {
      errors.userId = 'ID must be 8 characters';
    } else if (!/^\d+$/.test(userId)) {
      errors.userId = 'ID must contain only numbers';
    }

    if (!pin) {
      errors.pin = 'PIN is required';
  } else if (pin.length < 8) {
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

  if (!level) {
    errors.level = "select is required";
  }


  setErrors(errors);

  return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if (validateForm()) {
      navigation.navigate('Login');
      console.log('submitted', userId, pin);
      onChangeId("");
      onChangePin("");
      setCollege("");
      setDept("");
      setFalculty("");
      setLevel("");
      onChangeName("");
      setErrors({});
  }
  }

  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#a59d9e']} style={styles.container}>
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
        <Text style={styles.signUpText}>Create your account</Text>
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
          <Picker.Item label="Select your College" value="" />
          <Picker.Item label="Football" value="football" />
          <Picker.Item label="Baseball" value="baseball" />
          <Picker.Item label="Hockey" value="hockey" />
          <Picker.Item label="Hockey" value="hockey" />
          <Picker.Item label="Hockey" value="hockey" />
        </Picker>
        </View>
        {
          errors.college ? <Text style={styles.errorText}>{errors.college}</Text> : null
        }

        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={falculty}
          onChangeText={setFalculty}
          value={falculty}
          onValueChange={(Falculty) => setFalculty(Falculty)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your Falculty" value="" />
          <Picker.Item label="Faculty of Social Sciences" value="social sciences" />
          <Picker.Item label="Faculty of Law" value="law" />
          <Picker.Item label="Faculty of Educational Foundations" value="edu foundation" />
          <Picker.Item label="Hockey" value="hockey" />
          <Picker.Item label="Hockey" value="hockey" />
        </Picker>
        </View>
        {
          errors.falculty ? <Text style={styles.errorText}>{errors.falculty}</Text> : null
        }

        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={dept}
          onChangeText={setDept}
          value={dept}
          onValueChange={(Department) => setDept(Department)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your Department" value="" />
          <Picker.Item label="100" value="L100" />
          <Picker.Item label="200" value="L200" />
          <Picker.Item label="300" value="L300" />
          <Picker.Item label="400" value="L400" />
        </Picker>
        </View>
        {
          errors.dept ? <Text style={styles.errorText}>{errors.dept}</Text> : null
        }

        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={level}
          onChangeText={setLevel}
          value={level}
          onValueChange={(Level) => setLevel(Level)}
          style={styles.pickerInput}
        >
          <Picker.Item label="Select your Level" value="" />
          <Picker.Item label="100" value="L100" />
          <Picker.Item label="200" value="L200" />
          <Picker.Item label="300" value="L300" />
          <Picker.Item label="400" value="L400" />
        </Picker>
        </View>
        {
          errors.level ? <Text style={styles.errorText}>{errors.level}</Text> : null
        }
        <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
          <Text style={{textAlign: "center", fontWeight: 'bold', fontSize: 18,}}>Submit</Text>
        </TouchableOpacity>
      </View>
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
