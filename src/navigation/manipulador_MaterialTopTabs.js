import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";


export default function MyMaterialtopTabs() {
    const TabMaterialTabs = createMaterialTopTabNavigator();
    return (
        <NavigationContainer>
            <TabMaterialTabs.Navigator initialRouteName="Home" >
                <TabMaterialTabs.Screen name="Home" component={HomeScreen} />
                <TabMaterialTabs.Screen name="About" component={AboutScreen} />
            </TabMaterialTabs.Navigator>
        </NavigationContainer>
    );
}