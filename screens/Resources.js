import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import { AntDesign, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons'; // Import icons as needed


const Tab = createBottomTabNavigator();

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  

  const handleDownload = () => {
    // Implement your download logic here
    alert('Download PDF');
  };

  return (
    <LinearGradient colors={['#02080e', '#1e1e1e', '#a59d9e']} style={styles.container}>
      <View>
        <View style={{position: "fixed", }}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={{ color: '#fff', fontSize: 19, marginTop: 80}}>
            {'Download Resources on \n BSc. Computer Science'}
          </Text>
        </View>

          <SafeAreaView style={{marginTop: 35,}}>
            <ScrollView style={styles.scrollView}>
              <View style={{columnGap: 10, paddingTop: 30}}>
                <View>
                  <Image style={styles.pdfImage} source={require('../assets/pdf.png')} />
                  <Text style={{color: "#fff", position: "absolute", marginLeft: 100, marginTop: -2,}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                    <Text>Download</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{columnGap: 10, marginTop: 50}}>
                <View>
                  <Image style={styles.pdfImage} source={require('../assets/pdf.png')} />
                  <Text style={{color: "#fff", position: "absolute", marginLeft: 100, marginTop: -2,}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                    <Text>Download</Text>
                  </TouchableOpacity>
                </View> 
              </View>

              <View style={{columnGap: 10, marginTop: 50, paddingBottom: 30}}>
                <View>
                  <Image style={styles.pdfImage} source={require('../assets/pdf.png')} />
                  <Text style={{color: "#fff", position: "absolute", marginLeft: 100, marginTop: -2,}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                    <Text>Download</Text>
                  </TouchableOpacity>
                </View> 
              </View>
          </ScrollView>
        </SafeAreaView>

        
      </View>
      <View style={styles.tabContainer}>
      <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home'; // Change these to the actual icons you want to use
                return <MaterialIcons name={iconName} size={40} color="black" />;
              } else if (route.name === 'Courses') {
                iconName = focused ? 'book' : 'library-books';
                return <MaterialIcons name={iconName} size={size} color="#061337" />;
              } else if (route.name === 'Notification') {
                iconName = focused ? 'bell' : 'bell';
                return <FontAwesome name={iconName} size={size} color="#061337" />;
              } else if (route.name === 'Profile') {
                iconName = focused ? 'user' : 'user';
                return <AntDesign name={iconName} size={25} color="#061337" />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            style: { backgroundColor: 'black' },
          }}
        >
              <Tab.Screen name='Home' component={Home} />
              <Tab.Screen name='Courses' component={Courses}/>
              <Tab.Screen name='Notification' component={Notification}/>
              <Tab.Screen name='Profile' component={Profile}/>
            </Tab.Navigator>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  video: {
    width: 400,
    height: 300,
    marginTop: -200,
    // position: "fixed",
  },

  pdfImage: {
    width: 60,
    height: 80,
    margin: 20,
    marginTop: -25,
    position: "absolute"

  },

  downloadBtn: {
    // position: "absolute",
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    // margin: 50,
    marginLeft: 280,
    width: 100,
  },

  textContainer: {
    position: 'absolute',
    textAlign: 'center',
    marginLeft: 80,
  },

  tabContainer: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    height: 90,
    borderRadius: 15,

  },
});
