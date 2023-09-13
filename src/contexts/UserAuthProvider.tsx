import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
const AuthContext = createContext();

function UserAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setUser(FAKE_USER);
      setIsAuthenticated(true);
    }
  }

  function logout() {
    setUser(null);
    setIsAuthenticated(false);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useUserAuth() {
  const contextValue = useContext(AuthContext)
  return contextValue
}

export {UserAuthProvider, useUserAuth}

