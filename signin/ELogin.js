import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';

const SIGN_IN = 'SIGN_IN';
const GET_START = 'GET_START';
const windownWidth = Dimensions.get('window').width;

const E_LOGIN = () => {
  const [page, setPage] = useState(SIGN_IN);
  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
      <View style={{ height: '25%', width: '100%' }}>
        <E_HEADER page={page} setPage={setPage} />
      </View>

      <View style={{ height: '40%', width: '100%', backgroundColor: '#F5F5F5F5' }}>
        <E_BODY />
      </View>

      <View style={{ flex: 1, height: '40%', width: '100%', backgroundColor: '#F5F5F5F5' }}>
        <FOOTER />
      </View>

    </View>
  );
};

const E_HEADER = ({ page, setPage }) => {
  return (
    <View style={style.container}>
      <StatusBar barStyle='light-content' />
      {/* header */}
      <View style={{ width: '100%', height: '100%' }}>
        <View style={style.imageHeader}>
          <Text style={style.textLarge}>wasty</Text>
          <Text style={style.textSmall}>think for nature.</Text>
        </View>
        <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: '50%', height: ' 100%', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => setPage(SIGN_IN)}
            disabled={page === SIGN_IN ? true : false} >

            <Text style={style.textMinium}>Sign In</Text>
            {page === SIGN_IN ? <View style={{ position: 'absolute', bottom: 0, height: 3, width: '100%', backgroundColor: '#4D8D6E' }}></View> : null}
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '50%', height: ' 100%', alignItems: 'center', justifyContent: 'center' }}
            onPress={() => setPage(GET_START)}
            disabled={page === GET_START ? true : false} >

            <Text style={style.textMinium}>Get Started</Text>
            {page === GET_START ? <View style={{ position: 'absolute', bottom: 0, height: 3, width: '100%', backgroundColor: '#4D8D6E' }}></View> : null}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const E_BODY = () => {
  const [pwHidden, setPwdHidden] = useState(true);
  return (
    <View style={{ height: '100%', width: '100%', justifyContent: 'center' }}>
      <Text style={style.textHeader}>Login in your Account</Text>
      <View style={style.input}>
        <Image source={require('../signin/images/mail.png')} resizeMode='stretch' style={style.image} />
        <TextInput style={style.textInput} autoCapitalize='none' placeholder='E-mail' />
      </View>
      <View style={style.input}>
        <Image source={require('../signin/images/password.png')} resizeMode='stretch' style={style.image} />
        <TextInput style={style.textInput} autoCapitalize='none' secureTextEntry={pwHidden} placeholder='Password' textContentType='password' />
        <TouchableOpacity style={{ height: '100%', justifyContent: 'center' }}
          onPress={() => setPwdHidden(!pwHidden)}
        >
          <Image source={require('../signin/images/eye.png')} resizeMode='stretch' style={style.imageEye}></Image>
        </TouchableOpacity>
      </View>
      <View style={style.forgetPass}>
        <Text style={{ color: '#707070', position: 'absolute', right: 0 }}>Forget password ?</Text>
      </View>
      <View style={style.inputBE}>
        <TouchableOpacity style={{ height: 45, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4D8D6E', borderRadius: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FOOTER = () => {
  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '30' }}>
        <View style={{ height: 1, width: '25%', backgroundColor: '#4D8D6E' }}>
        </View>
        <Text style={{ color: '#4D8D6E', fontSize: 15 }}>  or connect with  </Text>
        <View style={{ height: 1, width: '25%', backgroundColor: '#4D8D6E' }} >
        </View>
      </View>

      <View style={{ width: windownWidth, height: 70, marginLeft: 30, marginTop: 0, flexDirection: 'row' }}>
        <Image source={require('../signin/images/googlebtn.png')} style={style.buttonSignWith}></Image>
        <Image source={require('../signin/images/googlebtn.png')} style={style.buttonSignWith}></Image>
      </View>
      <View style={{ width: windownWidth, height: 70, marginLeft: 30, marginTop: 0, flexDirection: 'row' }}>
        <Image source={require('../signin/images/googlebtn.png')} style={style.buttonSignWith}></Image>
        <Image source={require('../signin/images/googlebtn.png')} style={style.buttonSignWith}></Image>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  imageHeader: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#4D8D6E',
    alignItems: 'center',
    justifyContent: 'center'
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

export default E_LOGIN;