import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import _default from '@expo/vector-icons/build/FontAwesome';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Courses' component={Courses}/>
        <Tab.Screen name='Notification' component={Notification}/>
        <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
}

export default Tabs;
