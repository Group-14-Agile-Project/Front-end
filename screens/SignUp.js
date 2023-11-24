import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

export default function SignUp() {
  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#a59d9e']} style={{flex: 1,}}>
        <View>
            <ImageBackground source={require('../assets/ucc.png')}>

            </ImageBackground>
            <Text style={{color: "#fff"}}></Text>
        </View>
    </LinearGradient>
    
  )
}