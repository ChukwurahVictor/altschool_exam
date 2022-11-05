import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const ProtectedRoute = ({ children }) => {
   const { isAuth } = useContext(UserContext);
   if (!isAuth) {
      console.log(isAuth);
     // user is not authenticated
     return <Navigate to="/login" />;
   }

   return children;
};