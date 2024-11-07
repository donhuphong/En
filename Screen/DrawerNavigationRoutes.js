import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import Screens
import ProfilePage from "./Components/Profile";
// import HomePage from "./Components/Backg";
import FriendsPage from "./Components/Friends";
import NotificationsPage from "./Components/Noification";
import BooksPage from "./Components/Book";

// Khởi tạo Tab Navigator
const Tab = createBottomTabNavigator();

// Cấu hình icon cho từng tab
const getTabBarIcon = (route, focused, size, color) => {
    const iconMap = {
        Profile: "person-circle",
        Collection: "ios-list",
        Books: "book",
        Friends: "people",
        Notification: "notifications",
    };

    const iconName = iconMap[route.name] || "home";
    const iconOutline = focused ? iconName : `${iconName}-outline`;
    return <Ionicons name={iconOutline} size={size} color={color} />;
};

// Cấu hình cho tab bar
const getTabScreenOptions = (getTabBarIcon) => ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) =>
      getTabBarIcon(route, focused, size, color),
    tabBarActiveTintColor: "#4D8D6E",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  });

const DrawerNavigatorRoutes = (props) => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator initialRouteName="Profile" screenOptions={getTabScreenOptions(getTabBarIcon)}>
                <Tab.Screen name="Profile" component={ProfilePage} />
                <Tab.Screen name="Friends" component={FriendsPage} />
                <Tab.Screen name="Books" component={BooksPage} />
                <Tab.Screen name="Notification" component={NotificationsPage} />
                {/* <Tab.Screen name="Collection" component={HomePage} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigatorRoutes;