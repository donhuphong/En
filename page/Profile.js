import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, Dimensions } from 'react-native';
const windownWidth = Dimensions.get('window').width;
const PROFILE = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {/* header */}
      <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
        <View>
          <Text style={{}}>Welcome to application.</Text>
        </View>
        <View >
          <Text style={{}}>Let's started with us</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PROFILE;