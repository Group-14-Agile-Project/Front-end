import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

export default function Login() {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');



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

            {/* ID and Pin Input */}
            <View style={loginStyles.inpContainer}>
                    <TextInput
                style={loginStyles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Student ID"
                placeholderTextColor="#a09d9e"
                keyboardType="numeric"
                />
            </View>

            <View style={loginStyles.inpContainer2}>
                    <TextInput
                style={loginStyles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Pin"
                placeholderTextColor="#a09d9e"
                keyboardType="numeric"
                />
            </View>

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
        width: 158,
        height: 45,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 25,
        borderColor: '#a09d9e',
        textAlign: 'center',
      },

      inpContainer: {
        marginTop: 50,
        alignItems: "center",
      },
      inpContainer2: {
        alignItems: "center",
      }

})

