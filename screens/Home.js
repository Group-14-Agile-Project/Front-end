import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <LinearGradient colors={['#02080e', '#1e1e1e', '#a59d9e']} style={styles.container}>
    <SafeAreaView >
    <View style={styles.impose}>
        <View style={{position:"absolute"}}> 
            <Text style={{color: '#fff', fontSize: 18}}> Hello Manuel,</Text>
            <Text style={{color: '#fff'}}>What do you want to learn today?</Text>
        </View>
        <View>
          <View style={styles.profileContainer}>
            <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
          </View>
        </View>
      </View>
       <View >
      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton}>
        {/* You can replace the text with a search icon */}
        <Text> Search 🎗</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', columnGap: 100}}>
        <Text style={{color: '#fff', fontSize: 24}}>My Courses</Text>
        <Text style={{color: '#eee', fontSize: 20, fontWeight: 'normal' }}>Trending</Text>
      </View>
      
      {/* Horizontal Scroll View */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {/* "Human Resource" Card */}
        <View style={styles.courseContainer}>
          <Text></Text>
          <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Human Resource</Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>Human Resource 202</Text>
        </View>

        <View style={styles.courseContainer}>
          <Text></Text>
          <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Human Resource</Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>Human Resource 202</Text>
        </View>
      </ScrollView>

      <View style={{flexDirection: 'row', columnGap: 100}}>
        <Text style={{color: '#fff', fontSize: 20, marginTop: 18 }}>My Courses</Text>
      </View>
      
      {/* Horizontal Scroll View */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {/* "Human Resource" Card */}
        <View style={styles.courseContainer}>
          <Text></Text>
          <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Human Resource</Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>Human Resource 202</Text>
        </View>

        <View style={styles.courseContainer}>
          <Text></Text>
          <Image source={require('../assets/study.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Human Resource</Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>Human Resource 202</Text>
        </View>
      </ScrollView>


    </View>
    </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  impose:{
    flexDirection: 'row',
    marginTop: 10,
    height: "20%",
    marginLeft: 20,
    marginBottom: -49,
  },

  profileContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 340,
  },
  
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: -19,
  },
  
  searchButton: {
    alignItems: 'center',
    padding: 10,
    borderColor: '#3498db',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
  },
  horizontalScrollView: {
    marginTop: 10,
  },
  courseContainer: {
    backgroundColor: '#B7AEAE',
    // padding: 9,
    borderRadius: 15,
    marginRight: 15,
    width: 261,
    // height: 200,
  },

  courseText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  cardContainer: {
    marginTop: 20,
    borderRadius: 10,
    width: 300,
    overflow: 'hidden', // To apply border radius to Image
  },

  cardImage: {
    width: 240,
    height: 150,
    borderRadius: 30,
    marginTop: -10,
    marginLeft: 10,
  },

  cardText: {
    padding: 10,
    // backgroundColor: '#e74c3c',
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});