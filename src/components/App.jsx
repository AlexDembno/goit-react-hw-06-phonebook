import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'redux/store';

import PhoneBook from './PhoneBook/PhoneBook';

export const App = () => {
  return (
    <Provider store={store}>
      <PhoneBook />
    </Provider>
  );
};
