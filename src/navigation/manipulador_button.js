import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";


export default function MyTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
