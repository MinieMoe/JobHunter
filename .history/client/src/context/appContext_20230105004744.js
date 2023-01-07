import React, { useState, useReducer, useContext } from 'react';
import { DISPLAY_ALERT, Clear } from './actions';
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
    //the object passed into dipsatch() is an action, which is also a..
    //..parameter (also called 'action') of 'reducer' from reducer.js
    dispatch({type:DISPLAY_ALERT})
  }

  const clearAlert(){
    setTimeout( () =>{
      dispatch({type:})
    })
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