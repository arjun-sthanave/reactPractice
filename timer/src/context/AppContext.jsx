import { createContext, useContext, useState } from "react";

// 1. Create Context
const AppContext = createContext(null);

// 2. Provider Component
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [select, setselect] = useState(0)
  const [task1, settask] = useState([])
  const value = {
    user,
    setUser,
    notifications,
    setNotifications,
    select,
    setselect,
    task1,
    settask
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext must be used inside AppProvider"
    );
  }

  return context;
};
