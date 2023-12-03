import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from '../screens/SignUp';
import Login from '../screens/Login';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    <Tab.Navigator>
        <Tab.Screen name='SignUp' component={SignUp}/>
        <Tab.Screen name='Login' component={Lo}/>
    </Tab.Navigator>
}

