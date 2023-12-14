import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function IconTabs() { 
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate('Home')
  }

  const handleProfile = () => {
    navigation.navigate('Profile')
  }


  const handleNotification = () => {
    navigation.navigate('Notification')
  }

  const handleResource = () => {
    navigation.navigate('Resources')
  }
  
  return (
    <LinearGradient colors={['#626363', '#121517']} style={styles.iconContainer}>
      <View > 
        <Pressable style={{ flexDirection: "row", columnGap: 35, }}>
            <View>
              <AntDesign onPress={handleHome} name="home" size={55} color="#A09D9D" /> 
              <Text style={{color: '#fff', textAlign: "center"}}>Home</Text>
              </View>

              <View>
              <MaterialIcons onPress={handleResource} name="library-books" size={50} color="#A09D9D" />
              <Text style={{color: '#fff', textAlign: "center"}}>Courses</Text>
              </View>

              <View>
              <Ionicons onPress={handleNotification} name="notifications-outline" size={50} color="#eee" />
              <Text style={{color: '#fff', textAlign: "center"}}>Notification</Text>
              </View>
              
              <View>
              <AntDesign onPress={handleProfile} name="user" size={50} color="#eee" />
              <Text style={{color: '#fff', textAlign: "center"}}>Profile</Text>
              </View>
        </Pressable>
            </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  userIcon: {
    // You can add specific styles for the user icon if needed
  },

  iconContainer: {
    flex: 1,
    position: "absolute",
    //change this sometimes to fit the screen esp. during presentation to -150
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    width: "100%",
    paddingBottom: 10,
    paddingTop: 10,
    // backgroundColor: 'transparent', // Make sure to set a transparent background
  },
});
