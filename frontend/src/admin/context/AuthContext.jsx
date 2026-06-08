import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getAccessToken } from "../services/apiClient";
import { authService } from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount: if we have a token, fetch the current admin
  useEffect(() => {
    (async () => {
      if (!getAccessToken()) {
        setLoading(false);
        return;
      }
      try {
        const me = await authService.me();
        setAdmin(me);
      } catch {
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = useCallback(async (email, password) => {
    const admin = await authService.login(email, password);
    setAdmin(admin);
    return admin;
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setAdmin(null);
  }, []);

  const value = {
    admin,
    loading,
    isAuthenticated: !!admin,
    login,
    logout,
    hasRole: (...roles) => admin && roles.includes(admin.role),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}