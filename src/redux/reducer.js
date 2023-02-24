import { ADD_BOOK } from './types';

const initialState = {
  books: [],
  filter: '',
};

export const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const newBooks = [...store.books, action.payload];
      return { ...store, books: newBooks };

    default:
      return store;
  }
};
