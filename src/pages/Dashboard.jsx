import React, { useContext } from 'react';
import UserContext from '../context/UserContext'
// import { GetUser } from '../hooks/user';

const Dashboard = () => {
   const { userInfo } = useContext(UserContext);
  //  console.log('GetUser');
  //  const onLogout = (e) => {
  //     e.preventDefault();
  //     logout();
  //  }

   return (
     <>
       <p>Dashboard</p>
       <p>Hi, {userInfo?.username}</p>
     </>
   );
}

export default Dashboard