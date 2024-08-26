import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen ({ navigation }) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="About" onPress={() => navigation.navigation('About')} />
        </View>
    )
}