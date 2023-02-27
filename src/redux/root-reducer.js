import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import contactsSlice from './contactsSlice/contacts-slice';
import filterSlise from './filterSlise/filter-slise';

import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlise,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
