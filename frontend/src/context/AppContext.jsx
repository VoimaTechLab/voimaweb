// src/context/AppContext.jsx
import { createContext, useContext, useState } from 'react';
 
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
 
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};

