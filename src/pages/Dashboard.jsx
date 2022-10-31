import React, { useContext } from 'react';
import UserContext from '../context/UserContext'

const Dashboard = () => {
   const { logout } = useContext(UserContext);
   const onLogout = (e) => {
      e.preventDefault();
      logout();
   }

   return (
      <>
         <p>Dashboard</p>
         <button onClick={onLogout}>Logout</button>
      </>
   )
}

export default Dashboard