import React from 'react';
import { View, Text, FlatList } from 'react-native';

const HomeScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 16 }}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 16 }}>
        Menu
      </Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;