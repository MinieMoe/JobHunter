import React, { useState, useReducer, useContext } from 'react';
import { DISPLAY_ALERT } from './actions';
import reducer from './reducer';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () =>{
    //the object passed into dipsatch() is an action, which is also a
    //..parameter of 'reducer' from reducer.
    dispatch({type:DISPLAY_ALERT})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert
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