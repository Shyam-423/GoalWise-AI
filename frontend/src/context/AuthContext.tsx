import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../api/auth.api";

export const AuthContext = createContext<any>(null);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const res = await getCurrentUser();

      setUser(res.user);
    } catch {
      setUser(null);
    }

    setLoading(false);
  }

  async function login(data: any) {
    await loginUser(data);

    await checkUser();
  }

  async function register(data: any) {
    await registerUser(data);

    await checkUser();
  }

  async function logout() {
    await logoutUser();

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () =>
  useContext(AuthContext);