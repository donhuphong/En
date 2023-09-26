import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';

const SIGN_IN = 'SIGN_IN';
const GET_START = 'GET_START';

const E_LOGIN = () => {
  const [page, setPage] = useState(SIGN_IN);
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={{ height: '25%', width: '100%' }}>
        <E_HEADER page={page} setPage={setPage} />
      </View>

      <View style={{ height: '40%', width: '100%', backgroundColor: '#F5F5F5F5' }}>
        <E_BODY />
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
  return (
    <View style={{ height: '100%', width: '100%', borderWidth: 1, justifyContent: 'center' }}>
      <Text style={style.textHeader}>Login Account</Text>
      <View style={style.input}>
        <Image source={require('../signin/images/mail.png')} resizeMode='strectch' style={style.image} />
        <TextInput style={style.textInput} autoCapitalize={false} placeholder='E-mail'/>
      </View>
      <View style={style.input}>
        <Image source={require('../signin/images/password.png')} resizeMode='strectch' style={style.image} />
        <TextInput style={style.textInput} autoCapitalize={false} secureTextEntry={true} placeholder='Password' textContentType='password'/>
        <TouchableOpacity style ={{height:'100%', }}>
          <Image source={require('../signin/images/eye.png')} resizeMode='strectch' style={style.imageEye}></Image>
        </TouchableOpacity>
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
    fontWeight: 800,
    color: 'white'
  },
  textSmall: {
    fontSize: 10,
    fontWeight: 200,
    color: 'white'
  },
  textMinium: {
    fontSize: 20,
    fontWeight: 400,
    color: '#4D8D6E',
  },
  textLarge: {
    fontSize: 40,
    fontWeight: 800,
    color: 'white'
  },
  textHeader: {
    marginLeft: '10%',
    fontSize: 25,
    fontWeight: 1000,
    color: 'black'
  },
  input: {
    width: '80%',
    height: 40,
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    height: '100%',
    width: '100%',
    flex: 1,
    marginLeft: 20,
    fontSize: 20
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  imageEye: {
    width: 30,
    height: 30,
    marginRight: 10
  }
});

export default E_LOGIN;