import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OnBoarding from '../screens/OnBoarding';
import Home from '../screens/Home';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} >
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Home" component={AppStack} />
        </Stack.Navigator>
    )
}

export default MainStack