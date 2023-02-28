import ContactElement from 'components/ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contacts-slice';

import style from './Contacts.module.css';

function Contacts() {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  const findName = () => {
    if (!filter) {
      return contacts;
    }
    const result = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
    return result;
  };

  const filterName = findName();

  const deleteNumber = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  return (
    <ul>
      {filterName.map(({ id, name, number }) => {
        return (
          <li key={id} className={style.item}>
            <ContactElement
              name={name}
              number={number}
              onClick={() => deleteNumber(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
