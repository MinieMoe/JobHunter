import React, { useState, useReducer, useContext } from 'react';

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  //AppContext.Provider makes sure that everything wrapped ({children}) inside it will have the properties of its value (state/initialState)
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
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };