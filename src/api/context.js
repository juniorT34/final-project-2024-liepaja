// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [dataToPass, setDataToPass] = useState(['admin','student','teacher','staff']);

  return (
    <MyContext.Provider value={{ dataToPass, setDataToPass }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
