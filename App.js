import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import E_LOGIN from './signin/ELogin'

const Stack = createNativeStackNavigator();

function App() {
  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen name="Homesd" component={HomeScreen} />
    //     <Stack.Screen name="AboutScreen" component={HOME_SECE} /> */}
        
    //   </Stack.Navigator>
    // </NavigationContainer>
      <E_LOGIN/>
  );
}

export default App;
