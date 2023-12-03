import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

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
        <View style={{position: "fixed"}}>
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
          <Text style={{ color: '#fff', fontSize: 19, marginTop: -30 }}>
            {'Download Resources on \n BSc. Computer Science'}
          </Text>
        </View>

            <View style={{marginTop: 80}}>
        <View style={{columnGap: 10,}}>
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
        </View>

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
    marginTop: -300,
    position: "fixed",
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
});
