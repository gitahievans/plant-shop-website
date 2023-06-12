import { ReactNode, useState } from 'react';
import { createContext } from 'react';

type SideMenuBtnContextProps = {
  children: ReactNode;
};

type SideMenuBtnContextValue = {
  sideMenuBtnClicked: boolean;
  setSideMenuBtnClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SideMenuBtnContext = createContext<
  SideMenuBtnContextValue | undefined
>(undefined);

export const SideMenuBtnContextProvider = ({
  children,
}: SideMenuBtnContextProps) => {
  const [sideMenuBtnClicked, setSideMenuBtnClicked] = useState(false);

  const contextValue: SideMenuBtnContextValue = {
    sideMenuBtnClicked,
    setSideMenuBtnClicked,
  };

  return (
    <SideMenuBtnContext.Provider value={contextValue}>
      {children}
    </SideMenuBtnContext.Provider>
  );
};
