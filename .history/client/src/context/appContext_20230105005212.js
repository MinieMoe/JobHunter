import React, { useState, useReducer, useContext } from 'react';
import { DISPLAY_ALERT, CLEAR_ALERT } from './actions';
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
    /*the object passed into dipsatch() is an action, which is also a..
      ..parameter (also called 'action') of 'reducer' from reducer.js
      dispatch() send this 'action' object to reducer.js so the reducer...
      ... know which type of action to dispatch and update the current state
    */
    dispatch({
      type:DISPLAY_ALERT,
    })
    clearAlert()
  }

  const clearAlert = () =>{
    setTimeout( () => {
      dispatch({
        type:CLEAR_ALERT,
      })
    }, 3000);
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