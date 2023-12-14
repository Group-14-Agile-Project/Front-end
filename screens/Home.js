import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import IconTabs from '../Components/IconTabs';

export default function Home() {

  return (
    <LinearGradient colors={['#02080e', '#1e1e1e', '#a59d9e']} style={styles.container}>
      <SafeAreaView>
        <View style={styles.impose}>
          <View style={{ position: "absolute" }}>
            <Text style={{ color: '#fff', fontSize: 18 }}> Hello Manuel,</Text>
            <Text style={{ color: '#fff' }}>What do you want to learn today?</Text>
          </View>
          <View>
            <View style={styles.profileContainer}>
              <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
            </View>
          </View>
        </View>

        {/* Search Input */}
        <View style={styles.searchInputContainer}>
          <Feather name="search" size={24} color="#B7AEAE" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search Courses" placeholderTextColor="#B7AEAE" />
        </View>

        {/* Section Headers */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7 }}>
          <Text style={{ color: '#fff', fontSize: 24 }}>My Courses</Text>
          {/* <Text style={{ color: '#eee', fontSize: 20, fontWeight: 'normal' }}>Trending</Text> */}
        </View>

        {/* Horizontal Scroll View */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {/* "Human Resource" Card */}
          <View style={styles.courseContainer}>
            <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>Human Resource</Text>
            <Text style={{ fontSize: 13, textAlign: 'center' }}>Human Resource 202</Text>
          </View>

          <View style={styles.courseContainer}>
            <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>Human Resource</Text>
            <Text style={{ fontSize: 13, textAlign: 'center' }}>Human Resource 202</Text>
          </View>
        </ScrollView>

        {/* Section Header for My Courses */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 2 }}>
          <Text style={{ color: '#fff', fontSize: 20, marginTop: 8 }}>Trending</Text>
        </View>

        {/* Horizontal Scroll View for My Courses */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {/* "Human Resource" Card */}
          <View style={styles.courseContainer}>
            <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>Human Resource</Text>
            <Text style={{ fontSize: 13, textAlign: 'center' }}>Human Resource 202</Text>
          </View>

          <View style={styles.courseContainer}>
            <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>Human Resource</Text>
            <Text style={{ fontSize: 13, textAlign: 'center' }}>Human Resource 202</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <IconTabs />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },

  impose: {
    flexDirection: 'row',
    marginTop: 10,
    height: "20%",
    marginLeft: 20,
    marginBottom: -49,
  },

  profileContainer: {
    alignItems: 'center',
    marginLeft: 340,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: -19,
  },

  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 400,
    marginLeft: 5,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    height: 40,
    color: '#fff',
    
  },

  horizontalScrollView: {
    marginTop: 10,
  },

  courseContainer: {
    backgroundColor: '#B7AEAE',
    borderRadius: 15,
    marginRight: 15,
    marginLeft: 10,
    width: 261,
  },

  cardImage: {
    width: 240,
    height: 150,
    borderRadius: 30,
    marginTop: 10,
    marginLeft: 10,
  },

  cardText: {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: -5,
  },
});
