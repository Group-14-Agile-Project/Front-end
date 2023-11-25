import { View, Text, ImageBackground, Image, StyleSheet} from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';

export default function SignUp() {
  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#a59d9e']} style={{flex: 1,}}>
        <View>
            <Image style={{width: 500, height: 250}} source={require('../assets/study.jpg')} />
            <View>
              <Text style={signStyles.signUp_text}>
                Create your account 
              </Text>
            </View>
            <View>
            </View>
        </View>
    </LinearGradient>
    
  )
}

const signStyles = StyleSheet.create({
  signUp_text: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,

  },
})