import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice/contacts-slice';

import style from './FormAddContacts.module.css';

function FormAddContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    addContacts({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const findDublicate = name => {
    const result = contacts.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );
    return result;
  };

  const addContacts = ({ name, number }) => {
    if (findDublicate(name, number)) {
      return alert(`${name} is already in contacts`);
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label name="Name">
        <input
          className={style.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={handleChangeInput}
        />
      </label>
      <label name="number">
        <input
          className={style.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          onChange={handleChangeInput}
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default FormAddContacts;
