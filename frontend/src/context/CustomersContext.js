import React from 'react';
import { createContext, useReducer } from 'react';

export const CustomersContext = createContext();

export const customersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CUSTOMERS':
      return {
        customers: action.payload,
      };
    case 'CREATE_CUSTOMER':
      return {
        customers: [action.payload, ...state.customers],
      };
    case 'DELETE_CUSTOMER':
      return {
        customers: state.customers.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const CustomersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customersReducer, {
    customers: null,
  });

  return (
    <CustomersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CustomersContext.Provider>
  );
};
