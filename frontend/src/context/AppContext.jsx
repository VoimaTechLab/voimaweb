// src/context/AppContext.jsx
import { createContext, useState } from 'react';
 
const AppContext = createContext(null);
 
export function AppProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
 
  const showToast = (message, type = 'info') => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 4000);
  };
 
  return (
    <AppContext.Provider value={{
      navOpen, setNavOpen,
      toastMessage, showToast,
    }}>
      {children}
    </AppContext.Provider>
  );
}
 
export { AppContext };

