import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: {
      reducer: (_, { payload }) => payload,
    },
  },
});

export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
