import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts-slice';
import { filterContact } from 'redux/filter-slise';
import FormAddContacts from 'components/FormAddContacts/FormAddContacts';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Contacts from 'components/Contacts/Contacts';
import style from './PhoneBook.module.css';

function PhoneBook() {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

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

  const handleChangeFilter = e => {
    const action = filterContact(e.currentTarget.value);
    dispatch(action);
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
    const action = deleteContact(contactId);
    dispatch(action);
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
