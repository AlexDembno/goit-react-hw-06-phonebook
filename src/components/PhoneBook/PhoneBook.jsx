import FormAddContacts from 'components/FormAddContacts/FormAddContacts';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Contacts from 'components/Contacts/Contacts';
import style from './PhoneBook.module.css';

function PhoneBook() {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>PhoneBook</h1>
      <FormAddContacts />
      <FilterContacts />
      <p className={style.text}>Contacts</p>
      <Contacts />
    </div>
  );
}

export default PhoneBook;
