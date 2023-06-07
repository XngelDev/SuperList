import React from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native'
import { adaptNavigationTheme } from 'react-native-paper';
import Home from '../screens/Home';


const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: DefaultTheme,
    reactNavigationDark: DefaultTheme
});

const AppStack = () => {

    const colorScheme = useColorScheme();
    const navigationTheme = colorScheme === 'dark' ? DarkTheme : LightTheme;

    const theme = useTheme()

    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home-variant', unfocusedIcon: 'home-variant-outline' },
        { key: 'lists', title: 'Lists', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        lists: Home,
    });

    return (
        <BottomNavigation
            safeAreaInsets={{
                bottom:0
            }}
            
            theme={navigationTheme}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}

export default AppStack

const styles = StyleSheet.create({

})