import { View, Text } from 'react-native'
import React from 'react'
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { LinearGradient } from 'expo-linear-gradient';

export default function Resources() {
  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#a59d9e']}>
        <View>

        <Text>Resources</Text>
        </View>
    </LinearGradient>
  )
}