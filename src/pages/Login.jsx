import React, { useContext }from 'react';
import Form from "../components/Form";

import UserContext from '../context/UserContext'


const Login = () => {
   const { login } = useContext(UserContext); 
   const onSubmit = (e) => {
     e.preventDefault();
     login();
     
   };
   return (
      <>
         <Form onSubmit = { () => onSubmit()}/>
      </>
   )
}

export default Login