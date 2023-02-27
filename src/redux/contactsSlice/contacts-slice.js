import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (store, { payload }) =>
      store.filter(el => el.id !== payload),
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
