import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from 'redux/actions';
// import contacts from 'data/contacts';
import FormAddContacts from 'components/FormAddContacts/FormAddContacts';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Contacts from 'components/Contacts/Contacts';
import style from './PhoneBook.module.css';
import { nanoid } from 'nanoid';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

function PhoneBook() {
  const [contacts, setContacts] = useLocalStorage('my-contacts', []);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const books = useSelector(store => store.books);

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
    const action = addBook({ name, number });
    dispatch(action);
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const findName = () => {
    if (!filter) {
      return contacts;
    }
    const result = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  };

  const deleteNumber = contactId => {
    setContacts(prevState =>
      prevState.filter(contacts => contacts.id !== contactId)
    );
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>PhoneBook</h1>
      <FormAddContacts addContacts={addContacts} />
      <FilterContacts onChange={handleChangeFilter} />
      <p className={style.text}>Contacts</p>
      <Contacts filterName={findName()} onClick={deleteNumber} />
    </div>
  );
}

export default PhoneBook;
