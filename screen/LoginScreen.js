import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import Loader from './Components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const passwordInputRef = createRef();

  const showAlert = (message) => Alert.alert(message);

  const validateInput = () => {
    if (!userEmail) {
      showAlert('Please fill Email');
      return false;
    }
    if (!userPassword) {
      showAlert('Please fill Password');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    setErrorText('');
    if (!validateInput()) return;

    setLoading(true);

    console.info('userEmail: ', userEmail + '-' + userPassword);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userEmail === 'abc' ? 'emilys' : userEmail,
          password: userPassword === 'abc' ? 'emilyspass' : userPassword,
          expiresinMins: 30,
        }),
        credentials: 'include'
      });
      const responseJson = await response.json();
      console.info('RESPONSE: ', responseJson);
      setLoading(false);
      if (responseJson.message === 'Invalid credentials') {
        setErrorText(responseJson.message || 'Please check your email or password');
      } else {
        await AsyncStorage.setItem('user_id', responseJson.accessToken);
        navigation.replace('DrawerNavigationRoutes');
      }
    } catch (error) {
      setLoading(false);
      setErrorText('Network error. Please try again later.');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView enabled>
          <View style={styles.centeredContent}>
            <Image
              source={require('../Images/aboutreact.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={setUserEmail}
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={setUserPassword}
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          {errorText ? <Text style={styles.errorTextStyle}>{errorText}</Text> : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleLogin}
          >
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            New Here? Register
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
  inputSection: {
    flexDirection: 'row',
    height: 40,
    margin: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});