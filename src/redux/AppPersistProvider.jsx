import { View, Text } from 'react-native'
import React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'


const AppPersistProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<View><Text>Loading...</Text></View>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default AppPersistProvider