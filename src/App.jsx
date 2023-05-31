import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { useTheme } from 'react-native-paper';

function App() {

  const theme = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }} >
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />

    </SafeAreaView>
  );
}

export default App;
