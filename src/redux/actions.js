import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', payload => {
  return {
    payload: {
      ...payload,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contact/delete');

export const filterContact = createAction('contact/filter');
