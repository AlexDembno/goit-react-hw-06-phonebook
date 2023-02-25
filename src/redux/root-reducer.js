import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { contactReducer } from './contacts-slice';
import { filterReducer } from './filter-slise';

import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
