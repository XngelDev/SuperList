
import React from 'react'
import { useColorScheme } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { adaptNavigationTheme } from 'react-native-paper';

const { LightTheme, DarkTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme, reactNavigationDark: DefaultTheme });

const NavigationProvider = ({ children }) => {

    const colorScheme = useColorScheme();

    const navigationTheme = colorScheme === 'dark' ? DarkTheme : LightTheme;

    return (
        <NavigationContainer theme={navigationTheme} >
            {children}
        </NavigationContainer>)
}

export default NavigationProvider