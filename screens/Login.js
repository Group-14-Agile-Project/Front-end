import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
    const navigation = useNavigation();
    
    const [userId, onChangeId] = React.useState('');
    const [pin, onChangeNumber] = React.useState('');
    const [errors, setErrors] = React.useState({});

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

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if (validateForm()) {
            navigation.navigate('SignUp');
            console.log('submitted', userId, pin);
            onChangeId("");
            onChangeNumber("");
            setErrors({});
        }
    }

  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#a59d9e']}
    style={{ flex: 1 }} >
        <View >
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
                    onChangeText={onChangeNumber}
                    value={pin}
                    placeholder="Pin"
                    placeholderTextColor="#a09d9e"
                    keyboardType="numeric"
                    />
                </View>
                {
                    errors.pin ? <Text style={loginStyles.errorText}>{errors.pin}</Text> : null
                }
            </View>
            {/* End of ID and Pin Input View */}
            <TouchableOpacity>
                <Text style={{color: "white", textAlign: 'center'}}>Forgot password? Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit}  style={loginStyles.loginBtn}>
                <Text style={{textAlign: "center", fontWeight: 'bold',}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20, flexDirection: "row", marginLeft: 100}}>
                <Text style={{color: "white", textAlign: 'center'}}>Don't have and account? 
                </Text>
                <TouchableOpacity style={{marginLeft: 10,}}>
                    <Text style={{backgroundColor: "#fff", color: "#000",borderRadius: 10, paddingHorizontal: 10, }}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
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
        marginLeft: 140,
        marginTop: 19,
      },

      errorText:{
        color: "red",
        marginBottom: 10,
        textAlign: "center",
      }

})

