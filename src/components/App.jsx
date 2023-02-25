// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store } from 'redux/store';
// import { persistor } from 'redux/store';

import PhoneBook from './PhoneBook/PhoneBook';

export const App = () => {
  return <PhoneBook />;
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  //     <PhoneBook />
  //   </PersistGate>
  // </Provider>
};
