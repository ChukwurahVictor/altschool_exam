import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";

export const GetUser = () => {
   const { userinfo } = useContext(UserContext);
   return userinfo;
}