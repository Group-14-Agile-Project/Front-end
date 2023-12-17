import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import SignUp from './SignUp';
import Tabs from '../Components/Tabs';
import IconTabs from '../Components/IconTabs';


const Tab = createBottomTabNavigator();

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  

  const handleDownload = () => {
    // Implement your download logic here
    alert('Download PDF');
  };

  return (
    <LinearGradient colors={['#02080e', '#1e1e1e', '#626363']} style={styles.container}>
      <StatusBar barStyle="light-content" color="white" />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" color="white" />
          <View>
              <View style={styles.videoContainer}>
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
            
              <Text style={{ color: '#fff', fontSize: 19, marginLeft: 70, paddingTop: 20}}>
                {'Download Resources on \n BSc. Computer Science'}
              </Text>
            
          <ScrollView style={{marginBottom: 40, marginTop: 16,}}>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: "row", columnGap: 80}}>
              <View style={{marginLeft: 19,}}>
                <Image style={styles.pdfImage} source={require('../assets/pdf.png')} /> 
              </View>
              <Text style={{color: "#ffffff", marginLeft: -90, padding: 25}}>{'HR 101 \n Dr. Emmanuel Ani'}</Text>
              <View>
                <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </ScrollView>
      </View>
 
      <IconTabs />
      </SafeAreaView>   
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ecf0f1',
  },

  videoContainer:{
    alignItems: "center"
  },

  video: {
    width: 700,
    height: 250,
    // marginTop: -150,
    // position: "fixed",
  },

  // scrollView: {
  //   backgroundColor: '#f0f0f0',
  //   marginTop: -60,
  // },

  pdfImage:{
    width: 60,
    height: 75,
  },

  downloadBtn:{
    backgroundColor: "#eee",
    paddingHorizontal: 25,
    paddingVertical: 7,
    marginLeft: -50,
    marginTop: 30,
    borderRadius: 15,
  },

  closure:{

  }
});