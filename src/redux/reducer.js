import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { addContact, deleteContact, filterContact } from './actions';

export const contactReducer = createReducer([], {
  [addContact]: (store, { payload }) => {
    store.push(payload);
  },
  [deleteContact]: (store, { payload }) =>
    store.filter(el => el.id !== payload),
});

export const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

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
