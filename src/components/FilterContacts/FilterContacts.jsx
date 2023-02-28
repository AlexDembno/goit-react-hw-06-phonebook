import { filterContact } from 'redux/filterSlise/filter-slise';
import { useDispatch } from 'react-redux';

import style from './FilterContacts.module.css';

function FilterContacts() {
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    const action = filterContact(e.currentTarget.value);
    dispatch(action);
  };
  return (
    <label>
      <input
        className={style.input}
        type="text"
        placeholder="Find name"
        onChange={handleChangeFilter}
      />
    </label>
  );
}

export default FilterContacts;
