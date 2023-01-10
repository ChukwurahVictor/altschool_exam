import React, { createContext, useState, useEffect } from "react";

const initialState = {
  userInfo: null,
  isAuth: false,
};

export const UserContext = createContext(initialState);

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
      setIsAuth(true);
    }
  }, []);

  const login = (username, password) => {
    setIsAuth(true);
    setUserInfo({ username, password });
    localStorage.setItem("user", JSON.stringify({username, password}));
    localStorage.setItem("auth", "true");
  };

  const logout = () => {
    fetch("/logout").then((res) => {
      setIsAuth(false);
      setUserInfo(null);
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
    });
  };

   const value = {
      userInfo,
      setUserInfo,
      isAuth,
      setIsAuth,
      login,
      logout,
   };

   return (
      <UserContext.Provider value={value}> {children} </UserContext.Provider>
   );
};

export default UserContext;