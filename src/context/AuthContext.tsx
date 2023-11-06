"use client";
import { createContext, ReactNode, useState } from "react";
import { User } from "@/types/user";
import { useApi } from "@/services/api";

type AuthContextType = {
  user: User | null;
  login: (
    email: string,
    password: string,
    userType: string
  ) => Promise<boolean>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const login = async (email: string, password: string, userType: string) => {
    const data = await api.login(email, password, userType);
    if (userType === "teacher") {
      if (data?.admin && data?.token) {
        setUser({
          name: data?.admin.firstName + "" + data?.admin.lastName,
          email: data?.admin.email,
          id: data?.admin.id,
          userType: userType,
          token: data.token,
        });
        return true;
      }
    } else if (userType === "student") {
      if (data?.student && data?.token) {
        setUser({
          name: data?.student.firstName + "" + data?.student.lastName,
          email: data?.student.email,
          id: data?.student.id,
          userType: userType,
          token: data.token,
        });
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
