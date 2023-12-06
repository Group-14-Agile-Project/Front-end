import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons  } from '@expo/vector-icons';


export default function Notification() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.impose}>
        <View style={{position:"absolute"}}>
            <Image style={{width:43, height: 50,}} source={require('../assets/ucc.png')}/>
            <View style={{position: "absolute"}}>
            <Text style={{fontSize:12, marginLeft:45, color: "#fff", fontWeight: 500, width: 500 }}>{"University of \n Cape Coast"}</Text>
        </View>
        </View>

        <View>
        <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
      </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <StatusBar barStyle="light-content" color="white" />
        <View style={{backgroundColor: "", flexDirection: "row", marginTop: 40, marginLeft: 30,}}>
          <Text>Notifications</Text>
          <AntDesign style={{marginLeft: 230,}} name="close" size={24} color="black" /> 
        </View>

        <View style={{flexDirection: "row", marginTop: 30, margin: 20,}}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text style={{marginLeft: 10, marginTop: 8,}}>{'HO1 \n Human resource Notification'}</Text>
        <MaterialIcons style={{marginLeft: 70, marginTop: 26}} name="keyboard-arrow-right" size={24} color="black" />
        </View>

        <View style={{flexDirection: "row", marginTop: 30, margin: 20,}}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text style={{marginLeft: 10, marginTop: 8,}}>{'HO1 \n Human resource Notification'}</Text>
        <MaterialIcons style={{marginLeft: 70, marginTop: 26}} name="keyboard-arrow-right" size={24} color="black" />
        </View>

        <View style={{flexDirection: "row", marginTop: 30, margin: 20,}}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text style={{marginLeft: 10, marginTop: 8,}}>{'HO1 \n Human resource Notification'}</Text>
        <MaterialIcons style={{marginLeft: 70, marginTop: 26}} name="keyboard-arrow-right" size={24} color="black" />
        </View>

        <View style={{flexDirection: "row", marginTop: 30, margin: 20,}}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text style={{marginLeft: 10, marginTop: 8,}}>{'HO1 \n Human resource Notification'}</Text>
        <MaterialIcons style={{marginLeft: 70, marginTop: 26}} name="keyboard-arrow-right" size={24} color="black" />
        </View>

        <View style={{flexDirection: "row", marginTop: 30, margin: 20,}}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text style={{marginLeft: 10, marginTop: 8,}}>{'HO1 \n Human resource Notification'}</Text>
        <MaterialIcons style={{marginLeft: 70, marginTop: 26}} name="keyboard-arrow-right" size={24} color="black" />
        </View>

        <View style={{flexDirection: "row", marginTop: 30, margin: 20,}}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text style={{marginLeft: 10, marginTop: 8,}}>{'HO1 \n Human resource Notification'}</Text>
        <MaterialIcons style={{marginLeft: 70, marginTop: 26}} name="keyboard-arrow-right" size={24} color="black" />
        </View>

        <View style={{flexDirection: "row", marginTop: 30, margin: 20,}}>
        <Image style={styles.profileImage} source={require('../assets/mostFav.jpeg')} />
        <Text style={{marginLeft: 10, marginTop: 8,}}>{'HO1 \n Human resource Notification'}</Text>
        <MaterialIcons style={{marginLeft: 70, marginTop: 26}} name="keyboard-arrow-right" size={24} color="black" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

impose:{
  flexDirection: 'row',
  marginTop: 20,
  height: "20%",
  marginLeft: 20,
},

profileContainer: {
  // flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 50,
  marginLeft: 340,
},

profileImage: {
  width: 50,
  height: 50,
  borderRadius: 50,
  marginLeft: -10,
},

scrollView: {
  backgroundColor: '#f0f0f0',
  marginTop: -60,
}

})