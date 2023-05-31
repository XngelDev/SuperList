import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import AppThemeProvider from './src/theme/AppThemeProvider';

export default function Main() {
  return (
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
