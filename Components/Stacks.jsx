import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Resources from '../screens/Resources';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Resources' component={Tabs} />
        <Stack.Screen name='Resource' component={Resources} />
        <Stack.Screen name='SignUp' component={SignUp} />
    </Stack.Navigator>
  )
}