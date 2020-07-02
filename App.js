import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './app/screens/Home';
import SettingsScreen from './app/screens/SettingsScreen';
import HomeIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const homeIcon = <HomeIcon name="home" size={30} color="gray" />;
const settingsIcon = <Icon name="ios-settings" size={30} color="gray" />;

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => homeIcon,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => settingsIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
