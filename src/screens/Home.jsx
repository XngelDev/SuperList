import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SuperList from './SuperList'
import SuperListContent from './SuperListContent';

const Stack = createNativeStackNavigator()

const Home = () => {

    return (
        <View style={{flex:1}} >
            <Stack.Navigator screenOptions={{
                headerShown:false,
                animation:"slide_from_right"
            }} >
                <Stack.Screen name={"super_list"} component={SuperList} />
                <Stack.Screen name={"super_list_content"} component={SuperListContent} />
            </Stack.Navigator>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})