import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
   const [userInfo, setUserInfo] = useState(null);
   const [isAuth, setIsAuth] = useState(true);

   const login = () => {
      fetch("/login").then((res) => {
         console.log("log in clicked!");
         setIsAuth(true);
         setUserInfo(res.user);
      });
   };

   const logout = () => {
      fetch("/logout").then((res) => {
         console.log("log out clicked!");
         setIsAuth(false);
         setUserInfo(null);
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
