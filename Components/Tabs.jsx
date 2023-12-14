import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Courses from '../screens/Courses';
import Notification from '../screens/Notification';
import { AntDesign, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons'; // Import icons as needed
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Resources from '../screens/Resources';

const Tab = createBottomTabNavigator();


export default function Tabs() {
  return (
   <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName='Resources'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home'; // Change these to the actual icons you want to use
                    return <MaterialIcons name={iconName} size={40} color="#061337" />;
                } else if (route.name === 'Resources') {
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
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
                style: { backgroundColor: 'black', },
            }}
            >
                <Tab.Screen  options={{ headerShown: false }}  name='Home' component={Home} />
                <Tab.Screen  options={{ headerShown: false }}  name='Resources' component={Resources} />
                {/* <Tab.Screen name='Courses' component={Courses}/> */}
                <Tab.Screen  options={{ headerShown: false }}  name='Notification' component={Notification}/>
                <Tab.Screen  options={{ headerShown: false }}  name='Profile' component={Profile}/>
                {/* <Tab.Screen name='Login' component={Login} options={{ headerShown: false, tabBarButton: () => null }}/> */}
            </Tab.Navigator>
    </NavigationContainer>
  
  )
}

