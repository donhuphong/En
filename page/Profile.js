import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const windownWidth = Dimensions.get('window').width;
const PROFILE = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
        <View style={style.imageHeader}>
          <Text style={style.textLarge}>Welcome to application.</Text>
        </View>
        <View style={style.body}>
          <Text style={style.textSmall}>Let's started with us</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  imageHeader: {
    flex: '1',
    width: '100%',
    height: '60%',
    backgroundColor: '#4D8D6E',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  body: {
    width: '100%',
    height: '60%',
    backgroundColor: '#4D8D6E',
    alignItems: 'center'
  },
  textLarge: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white'
  },
  textSmall: {
    fontSize: 10,
    fontWeight: '200',
    color: 'white'
  },
  textMinium: {
    fontSize: 20,
    fontWeight: '400',
    color: '#4D8D6E',
  },
  textLarge: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white'
  },
  textHeader: {
    marginLeft: '10%',
    fontSize: 25,
    fontWeight: '900',
    color: 'black'
  },
  input: {
    width: '80%',
    height: 45,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inputBE: {
    width: '80%',
    height: 40,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#F5F5F5',
    flexDirection: 'row'
  },
  textInput: {
    height: '100%',
    width: '100%',
    flex: 1,
    marginLeft: 20,
    fontSize: 20
  },
  image: {
    width: 25,
    height: 25,
    marginLeft: 10
  },
  imageEye: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  forgetPass: {
    width: '80%',
    height: 40,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonSignWith: {
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: (0.5 * (windownWidth - 30) - 3),
    height: '100%',
    resizeMode: 'contain'
  }
});

export default PROFILE;