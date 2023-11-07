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

type UserData = {
  dataProp: User | null;
  nameProp: string;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const login = async (email: string, password: string, userType: string) => {
    const data = await api.login(email, password, userType);
    
    const userProperties: Record<string, UserData> = {
      teacher: {
        dataProp: data?.admin,
        nameProp: 'admin',
      },
      student: {
        dataProp: data?.student,
        nameProp: 'student',
      },
    };
    
    const userData = userProperties[userType];
    
    if (userData?.dataProp && data?.token) {
      const { dataProp, nameProp } = userData;
      setUser({
        name: dataProp.name,
        email: dataProp.email,
        id: dataProp.id,
        userType: userType,
        token: data.token,
      });
      return true;
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