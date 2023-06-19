import React from "react";
import { createContext, useState } from "react";

export const settingContext = createContext({});
export const SettingProvider = ({ children }) => {
  const [modalDeleteON, setModalDeleteON] = useState(false);
  const [modalUpdateON, setModalUpdateON] = useState(false);

  return (
    <settingContext.Provider
      value={{
        modalDeleteON,
        setModalDeleteON,
        modalUpdateON,
        setModalUpdateON,
      }}
    >
      {children}
    </settingContext.Provider>
  );
};
