import { View, Text } from 'react-native'
import React from 'react'
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'
import { LinearGradient } from 'expo-linear-gradient';

export default function Resources() {
  return (
    <LinearGradient colors={['#02080e','#1e1e1e','#a59d9e']}>
        <View>
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: ResizeMode.CONTAIN,
                    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                    source: {
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
            />
        <Text>Resources</Text>
        </View>
    </LinearGradient>
  )
}