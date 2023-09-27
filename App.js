import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import E_LOGIN from './signin/ELogin'
import HomeScreen from './Home'

const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={E_LOGIN} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <E_LOGIN/>
  );
}

export default App;
