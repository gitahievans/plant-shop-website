import { useState } from 'react';
import { createContext } from 'react';

export const SideMenuBtnContext = createContext();

export const SideMenuBtnContextProvider = ({ children }) => {
  const [sideMenuBtnClicked, setSideMenuBtnClicked] = useState(false);


  return (
    <SideMenuBtnContext.Provider value={{ sideMenuBtnClicked, setSideMenuBtnClicked }}>
      {children}
    </SideMenuBtnContext.Provider>
  );
};
