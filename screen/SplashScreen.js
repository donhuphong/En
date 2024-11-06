import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";

import { AsyncStorage } from "react-native";

const SplashScreen = ({ navigator }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem("user_id").then((value) =>
        navigator.replace(value === null ? "Auth" : "DrawerNavigationRoutes")
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("")} />
      <ActivityIndicator
        animating={animating}
        size={"large"}
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    alignItems: center,
  },
});
