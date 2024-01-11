import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, StatusBar } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BASE_API_URI } from '../utils/api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Tabs from '../Components/Tabs';
// import { BASE_API_URI } from '../utils/api';
// // import { TouchableOpacity } from 'react-native-gesture-handler';
import { login } from '../actions/AuthAction';
import { useDispatch ,useSelector} from 'react-redux';
export default function Login() {
    const navigation = useNavigation();
    const dispatch = useDispatch()


    const user_login = useSelector(state => state.user_login)
    const { error, loading, userInfo } = user_login
    console.log(userInfo)

    const [userId, onChangeId] = React.useState('');
    const [pin, onChangePin] = React.useState('');
    // const [userId, onChangeId] = React.useState('');
    // const [pin, onChangeNumber] = React.useState('');
    const [errors, setErrors] = React.useState({});
    // const [userIdInfo, setUserId] = React.useState('')

    // const handleChange =(key, value)=>{
    //   if(key === "userId"){
    //     setUserId(value)
    //   }
    // }

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
        } else if (pin.length < 3 ) {
            errors.pin = 'PIN must be at least 8 characters';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const handleLogin = async () => {
      if (validateForm()) {
        try {
          dispatch(login(userId,pin))
          if (userInfo) {
            Alert.alert('Success', 'You have successfully logged in.');
            
            navigation.navigate("Resources");
            onChangeId("");
            setErrors({});
          } else {
            // Login failed, show an alert
            Alert.alert('Login Failed', 'Invalid credentials. Please check your ID and PIN.');
          }
        } catch (error) {
          console.error('Axios Error:', error);
          console.error('Axios Response Data:', error.response?.data);
          // Handle other errors if needed
        }

        onChangeId('')
        onChangePin('')
      }
    };

    const handleSignUp = () => {
      navigation.navigate('SignUp');
    }

    const handleResetPass = () => {
      navigation.navigate('ResetPasswordScreen')
    }

  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#626363']}
    style={{ flex: 1 }} >
      <SafeAreaView>
      <StatusBar barStyle="light-content" color="white" />
        <View style={{marginTop: 89}}>
            {/* Logo and the name  */}
            <View style={loginStyles.container}>
                <View style={loginStyles.logoContainer}>
                    <Image style={loginStyles.logo} source={require('../assets/ucc.png')}/>
                </View>
                <View style={loginStyles.textContainer}>
                    <Text style={loginStyles.text}>{"University of \n Cape Coast"}</Text>
                </View>
            </View>

            {/* Start of ID and Pin Input */}
            <View>
                <View style={loginStyles.inpContainer}>
                        <TextInput
                    style={loginStyles.input}
                    // onChangeText={onChangeId}
                    onChangeText={onChangeId}
                    value={userId}
                    placeholder="Student ID"
                    placeholderTextColor="#a09d9e"
                    keyboardType="numeric"
                    />
                </View>
                {
                    errors.userId ? <Text style={loginStyles.errorText}>{errors.userId}</Text> : null
                }

                <View style={loginStyles.inpContainer2}>
                        <TextInput
                    style={loginStyles.input2}
                    onChangeText={onChangePin}
                    value={pin}
                    type="password"
                    placeholder="PIN"
                    placeholderTextColor="#a09d9e"
                    keyboardType="numeric"
                    secureTextEntry={true}
                    />
                </View>
                {
                    errors.pin ? <Text style={loginStyles.errorText}>{errors.pin}</Text> : null
                }
            </View>
            {/* End of ID and Pin Input View */}
            <TouchableOpacity >
                <Text style={{color: "white", textAlign: 'center'}}>Forgot password? <Text style={{color: "orange"}} onPress={handleResetPass}>Reset</Text></Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin}   style={loginStyles.loginBtn}>
                <Text style={{textAlign: "center", fontWeight: 'bold',}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20, flexDirection: "row", marginLeft: 100}}>
                <Text style={{color: "white", textAlign: 'center'}}>Don't have an account? 
                </Text>
                <TouchableOpacity onPress={handleSignUp} style={{marginLeft: 10,}}>
                    <Text style={{backgroundColor: "#fff", color: "#000",borderRadius: 10, paddingHorizontal: 10, }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
        </SafeAreaView>
    </LinearGradient>
  )
}


const loginStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#000000",
    },

    container: {
        flexDirection: 'row', // Align children horizontally
        padding: 16,
        marginTop: 100,
        alignContent: "center",
        marginLeft: 28,
      },

    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },

    logo: {
        width: 81,
        height: 109,
        margin: 40,
        marginBottom: -10,
    },

    textContainer: {
        flex: 2, // Take 2/3 of the available space
        justifyContent: 'center', // Center text vertically
        alignItems: 'flex-start', // Align text to the start (left)
        textAlign: "center"
      },

      logoContainer: {
        flex: 1, // Take 1/3 of the available space
        alignItems: 'flex-start', // Align items to the start (left)
      },

      input: {
        width: 170,
        height: 45,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 25,
        borderColor: '#a09d9e',
        textAlign: 'center',
        color: "#fff"
      },

      input2: {
        width: 170,
        height: 45,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 25,
        borderColor: '#a09d9e',
        textAlign: 'center',
        color: "#fff"
      },

      inpContainer: {
        marginTop: 50,
        alignItems: "center",
      },
      inpContainer2: {
        alignItems: "center",
      },

      loginBtn: {
        backgroundColor: "#ffffff",
        padding: 10,
        borderRadius: 25,
        width: 130,
        marginLeft: 159,
        marginTop: 19,
      },

      errorText:{
        color: "red",
        marginBottom: 10,
        textAlign: "center",
      }

})

