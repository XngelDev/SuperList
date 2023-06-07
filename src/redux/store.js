import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import appReducer from './app/reducers';
import superListReducers from './super_list/reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const reducers = combineReducers({
    app: appReducer,
    superList: superListReducers
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };