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

        <View style={styles.textContainer}>
          <Text style={{ color: '#fff', fontSize: 19, marginTop: -99 }}>
            {'Download Resources on \n BSc. Computer Science'}
          </Text>
        </View>

        <View style={styles.downloadContainer}>
          <Image style={styles.pdfImage} source={require('../assets/favicon.png')} />
          <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
            {/* <FontAwesome name="download" size={1} color="#fff" /> */}
            <Text>Download</Text>
          </TouchableOpacity>
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
    marginTop: -390,
  },

  downloadContainer: {
    flexDirection: "row",
    position: "relative",
    alignItems: 'center',
    marginBottom: -20,
    marginTop: 90,
  },

  pdfImage: {
    width: 40,
    height: 40,
    margin: 10,
  },

  downloadBtn: {
    position: "absolute",
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 50,
    marginLeft: 300
  },

  textContainer: {
    position: 'absolute',
    textAlign: 'center',
    marginLeft: 80,
  },
});
