import React from "react"
import { useColorScheme } from 'react-native';
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from 'react-native-paper';

import {
    DefaultDark,
    DefaultLight,
} from './AppColorSchemas';

const colorSchemaSelector = {
    dark: {
        ...MD3DarkTheme,
        colors: {
            ...DefaultDark.colors,
        },
    },
    light: {
        ...MD3LightTheme,
        colors: {
            ...DefaultLight.colors
        },
    }
}

const AppThemeProvider = ({ children }) => {

    const colorScheme = useColorScheme();

    const appTheme = colorSchemaSelector[colorScheme]

    return (
        <PaperProvider theme={appTheme} >
            {children}
        </PaperProvider >
    )
}

export default AppThemeProvider