import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function IconTabs() { 
  const navigation = useNavigation();

  const handleProfile = () => {
    navigation.navigate('Profile')
  }
  
  return (
    <LinearGradient colors={['#121517', '#626363']} style={styles.iconContainer}>
      <Pressable style={{ flexDirection: "row", columnGap: 25 }}>
        <AntDesign name="home" size={50} color="#A09D9D" />
        <MaterialIcons name="library-books" size={60} color="#A09D9D" />
        <AntDesign onPress={handleProfile} name="user" size={60} color="#A09D9D" />
        <Ionicons name="notifications-outline" size={60} color="#A09D9D" />
      </Pressable>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  userIcon: {
    // You can add specific styles for the user icon if needed
  },

  iconContainer: {
    position: "absolute",
    top: 710,
    paddingTop: -300,
    alignItems: "center",
    justifyContent: "flex-end",
    height: "10%",
    width: "90%",
    marginLeft: 20,
  },
})
