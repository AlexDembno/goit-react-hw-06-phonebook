import { useSelector } from 'react-redux';
import ContactElement from 'components/ContactElement/ContactElement';
import PropTypes from 'prop-types';
import { getPhone } from 'redux/selectors';

import style from './Contacts.module.css';

function Contacts({ filterName, onClick }) {
  const book = useSelector(getPhone);
  return (
    <ul>
      {book.map(({ id, name, number }) => {
        return (
          <li key={id} className={style.item}>
            <ContactElement
              name={name}
              number={number}
              onClick={() => onClick(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  filterName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
