import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filtersReducer } from './filterSlice';
import { authReducer } from './auth/authSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const tokenPersistReducer = persistReducer(contactsPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: tokenPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
