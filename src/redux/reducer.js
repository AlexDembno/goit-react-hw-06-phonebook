import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './types';

const initialState = {
  contacts: [],
  filter: '',
};

export const reducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...store.contacts, action.payload];
      return { ...store, contacts: newContacts };
    case DELETE_CONTACT:
      const removeContact = store.contacts.filter(
        el => el.id !== action.payload
      );
      return { ...store, contacts: removeContact };
    case FILTER_CONTACT:
      return { ...store, filter: action.payload };

    default:
      return store;
  }
};
