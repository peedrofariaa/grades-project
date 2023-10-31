import { createContext } from "react";
import { User } from "@/types/user";

export type AuthContextType = {
  user: User | null;
  login: (
    email: string,
    password: string,
    userType: string
  ) => Promise<boolean>;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType>(null!);
