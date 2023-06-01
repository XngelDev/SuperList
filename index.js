import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import AppThemeProvider from './src/theme/AppThemeProvider';
import AppPersistProvider from './src/redux/AppPersistProvider';

export default function Main() {
  return (
    <AppPersistProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </AppPersistProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
