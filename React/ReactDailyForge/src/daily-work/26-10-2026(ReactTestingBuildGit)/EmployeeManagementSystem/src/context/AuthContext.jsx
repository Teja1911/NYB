import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const DEMO_EMAIL = "admin@company.com";
const DEMO_PASSWORD = "Admin123!";

function getStoredUser() {
  try {
    const storedUser = localStorage.getItem("ems-demo-user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);

  function login(email, password) {
    const normalizedEmail = email.trim().toLowerCase();

    if (
      normalizedEmail === DEMO_EMAIL &&
      password === DEMO_PASSWORD
    ) {
      const loggedInUser = {
        name: "Admin User",
        email: DEMO_EMAIL,
        role: "Administrator"
      };

      localStorage.setItem(
        "ems-demo-user",
        JSON.stringify(loggedInUser)
      );

      setUser(loggedInUser);

      return { success: true };
    }

    return {
      success: false,
      message: "Invalid email or password."
    };
  }

  function logout() {
    localStorage.removeItem("ems-demo-user");
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider."
    );
  }

  return context;
}