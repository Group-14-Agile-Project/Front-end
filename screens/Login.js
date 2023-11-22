import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

export default function Login() {
  return (
    <LinearGradient colors={['#02080e', '#a09d9e','#02080e']}
    style={{ flex: 1 }} >
        <View>
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
            <View>
            
            </View>

        </View>
    </LinearGradient>
  )
}

const loginStyles = StyleSheet.create({
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

})

