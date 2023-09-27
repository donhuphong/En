import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { SearchBar } from '@rneui/themed';
const windownWidth = Dimensions.get('window').width;
const FRIEND = () => {
  const [searchText, setSearchText] = useState();
  return (
    <View style={style.container}>
      {/* header */}
      <View style={{ width: '100%', height: '100%', backgroundColor: '#F5F5F5' }}>
        <View style={{ width: '100%', height: '10%', justifyContent: 'center',alignItems: 'flex-end' }}>
          <TextInput style={{
            height: '50%',
            width: '60%',
            marginLeft: 20,
            fontSize: 20,
            backgroundColor: '#EEEEEE',
            marginRight: 10,
            borderRadius: 100,
            paddingLeft: 20
          }} placeholder='searching...'/>
        </View>

        <View style={{ width: '100%', height: '50%', backgroundColor: 'blue' }}>
          <Text style={style.textSmall}></Text>
        </View>

        <View style={{ width: '100%', height: '10%', backgroundColor: 'yellow' }}></View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    flex: '1',
    width: '60%',
    height: '7%',
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    marginTop: 5,
    borderRadius: 100
  },
  body: {
    width: '100%',
    height: '93%',
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  textSmall: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white'
  },
  textInput: {
    height: '100%',
    width: '100%',
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
    alignItems: 'flex-end'
  }
});

export default FRIEND;