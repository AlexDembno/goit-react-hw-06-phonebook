import { nanoid } from 'nanoid';
import { ADD_BOOK } from './types';

export const addBook = payload => {
  return {
    type: ADD_BOOK,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};
