import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PROFILE from './page/Profile';
import HOME_PAGE from './page/Backg';
import FRIEND from './page/Friends';
import NOTIFICATION from './page/Noification'
import MyPDFViewer from './page/Book'
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Collection') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Books') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Friends') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Notification'){
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4D8D6E',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })
      }>
        <Tab.Screen name="Profile" component={PROFILE} />
        <Tab.Screen name="Friends" component={FRIEND} />
        <Tab.Screen name="Books" component={MyPDFViewer} />
        <Tab.Screen name="Notification" component={NOTIFICATION} />
        <Tab.Screen name="Collection" component={HOME_PAGE} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default HomeScreen;