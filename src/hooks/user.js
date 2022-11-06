import React, { useState, useContext } from 'react';
import { UserContext } from "../context/UserContext";

// const { isAuth, userInfo, logout } = useContext(UserContext);

const useGetUser = (initialState = "") => {
  const [currentUser, setCurrentUser] = useState(initialState);
  const user = () => setCurrentUser();
  return { user };
};