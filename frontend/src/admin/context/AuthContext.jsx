import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { setAuthFailureHandler } from "../services/apiClient";
import {
  bootstrapSession,
  login as loginService,
  logout as logoutService,
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on app load
  useEffect(() => {
    let mounted = true;
    (async () => {
      const restored = await bootstrapSession();
      if (mounted) {
        setUser(restored);
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  // If a token refresh fails anywhere, clear the user (forces login)
  useEffect(() => {
    setAuthFailureHandler(() => setUser(null));
  }, []);

  const login = useCallback(async (email, password) => {
    const admin = await loginService(email, password);
    setUser(admin);
    return admin;
  }, []);

  const logout = useCallback(async () => {
    await logoutService();
    setUser(null);
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}