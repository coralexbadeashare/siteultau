"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "editor";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user database (in production, this would be a real database)
const MOCK_USERS = [
  {
    id: "1",
    email: "admin@bellachic.ro",
    name: "Administrator",
    role: "admin" as const,
  },
  {
    id: "2",
    email: "editor@bellachic.ro",
    name: "Editor",
    role: "editor" as const,
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session
    const userCookie = Cookies.get("auth-user");
    if (userCookie) {
      try {
        const userData = JSON.parse(userCookie);
        const foundUser = MOCK_USERS.find(u => u.id === userData.id);
        if (foundUser) {
          setUser({
            id: foundUser.id,
            email: foundUser.email,
            name: foundUser.name,
            role: foundUser.role,
          });
        }
      } catch {
        // Invalid cookie, remove it
        Cookies.remove("auth-user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // In production, this would be an API call with proper password hashing
    
    const foundUser = MOCK_USERS.find(u => u.email === email);
    if (!foundUser) {
      throw new Error("Email sau parolă incorectă");
    }

    // Simple password check for demo purposes
    const validPasswords: Record<string, string> = {
      "admin@bellachic.ro": "admin123",
      "editor@bellachic.ro": "editor123"
    };

    if (validPasswords[email] !== password) {
      throw new Error("Email sau parolă incorectă");
    }

    // Create user data for cookie
    const userData = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      role: foundUser.role,
    };

    // Set cookie with user data
    Cookies.set("auth-user", JSON.stringify(userData), { expires: 7, sameSite: "strict" });

    // Set user state
    setUser(userData);

    // Redirect to admin dashboard
    router.push("/bellachicstudio/admin");
  };

  const logout = () => {
    Cookies.remove("auth-user");
    setUser(null);
    router.push("/bellachicstudio/admin/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}