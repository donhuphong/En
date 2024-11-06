import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const [animating, setAnimating] = useState(true);

  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    console.log("get userKey");
    setTimeout(async () => {
      setAnimating(false);
      try {
        const userKey = await AsyncStorage.getItem("user_id")
        console.log("userKey: " + userKey);

      if (userKey !== null) {
        // Sau khi sử dụng xong user_id, xóa nó nhu token expire
        await AsyncStorage.removeItem("user_id");
        console.log("user_id đã được xóa");
      }

        navigation.navigate(userKey === null ? "Auth" : "DrawerNavigationRoutes")
        // navigation.navigate("DrawerNavigationRoutes")
      } catch (error) {
        console.log("get userKey error" + error);
        navigation.navigate("Auth")
      }
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/aboutreact.png')}
        style={styles.image}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  image: {
    width: '90%',
    resizeMode: 'contain',
    margin: 30,
  },
});
