import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
   const isAuth = localStorage.getItem("auth");
   if (!isAuth) {
     // user is not authenticated
     return <Navigate to="/login" />;
   }
   return children;
};