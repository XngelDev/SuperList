import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { useTheme } from 'react-native-paper';

import {
  init
} from './redux/app/reducers';

function App() {

  const theme = useTheme();

  const dispatch = useDispatch();
  const app = useSelector(state => state.app);

  const initApp = () => dispatch(init());

  React.useEffect(() => {
    initApp();
  }, []);

  console.log(app)

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
