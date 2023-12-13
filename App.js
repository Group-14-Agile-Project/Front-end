import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Resources from './screens/Resources';
import Tabs from './Components/Tabs';
import Stacks from './Components/Stacks';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  const [isloggedIn, setIsloggedIn] = useState(false)
  useEffect(()=>{
    const getUserId = async()=>{
      const value = await AsyncStorage.getItem("user");
      setIsloggedIn(value)
    }
    getUserId()
  }, [])

  // console.log(isloggedIn)
  return (
    // <View >
 <NavigationContainer style={styles.container} independent={true}>
  {isloggedIn ? (
    <Tabs />
  ) : (
    <Stacks />
  )}
  {/* {isloggedIn && <Stacks/>} */}
</NavigationContainer>
    // {/* </View> */}
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
  },
});
