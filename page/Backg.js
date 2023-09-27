import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HOME_PAGE = () => {

  const Header = () => {
    return (
      <View style={style.header}>
        <Text style={style.text}> Header App</Text>
      </View>
    )
  }

  const Boxes = () => {
    return (
      <View style={style.boxes}>
        <View style={style.item}>
          <Text>Box 1</Text>
        </View>
        <View style={style.item}>
          <Text>Box 2</Text>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={style.container}>
      <Header />
      <Boxes />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  header: {
    backgroundColor: 'blue',
    width: '100%',
    height: '15%',
    alignItems: 'center', // canh ngang 
    justifyContent: 'center' // canh doc
  },
  boxes: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '15%',
    flexDirection: 'row'
  },
  item: {
    width: '50%',
    height: '50%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    frontSize: 50
  }
});

export default HOME_PAGE;