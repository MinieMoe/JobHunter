import React, { useState, useReducer, useContext } from 'react';
import reducer
 from './reducer';
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook: make sure to include 'use' in the name
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };