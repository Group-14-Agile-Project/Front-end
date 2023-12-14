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
    <LinearGradient colors={['#626363', '#121517']} style={styles.iconContainer}>
      <View style={{ flexDirection: "row", columnGap: 35, }}> 
        <View>
        <AntDesign name="home" size={55} color="#A09D9D" /> 
        <Text style>Home</Text>
        </View>
        
        <MaterialIcons name="library-books" size={60} color="#A09D9D" />
        <AntDesign onPress={handleProfile} name="user" size={60} color="#eee" />
        <Ionicons name="notifications-outline" size={60} color="#eee" />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  userIcon: {
    // You can add specific styles for the user icon if needed
  },

  iconContainer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    width: "100%",
    // paddingBottom: 20,
    backgroundColor: 'transparent', // Make sure to set a transparent background
  },
});
