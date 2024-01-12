import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Resources from '../screens/Resources';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import AboutUs from '../ProfileComponents/AboutUs';
import SupportScreen from '../ProfileComponents/SupportScreen';
import ResetPasswordScreen from '../ProfileComponents/ResetPasswordScreen';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Resources' component={Resources}  options={{headerShown: false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Notification' component={Notification} options={{headerShown: false}}/>
        <Stack.Screen name='AboutUs' component={AboutUs} options={{headerShown: false}}/>
        <Stack.Screen name='SupportScreen' component={SupportScreen} options={{headerShown: false}} />
        <Stack.Screen name='ResetPasswordScreen' component={ResetPasswordScreen} options={{headerShown: false}} />
        <Stack.Screen name='Search' component={Search} options={{headerShown: false}} />

    </Stack.Navigator>
  )
}