import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Form from "../components/Form";

import UserContext from '../context/UserContext';

// const initialState = {
//   username: "",
//   password: "",
// };

const Login = () => {
   const navigate = useNavigate();
   
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const { login } = useContext(UserContext);

  //  useEffect = () => ({
     
  // }, [username, password, isAuth]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    setUsername("");
    setPassword("");
    navigate("/dashboard")
   };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
   return (
     <>
       <div className="w-full max-w-sm mt-20 m-auto">
         <form
           onSubmit={handleSubmit}
           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
         >
           <div className="mb-4">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="username"
             >
               Username
             </label>
             <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username"
               type="text"
               placeholder="Username"
               onChange={handleUsernameChange}
             />
           </div>
           <div className="mb-6">
             <label
               className="block text-gray-700 text-sm font-bold mb-2"
               htmlFor="password"
             >
               Password
             </label>
             <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               id="password"
               type="password"
               placeholder="Enter your password"
               onChange={handlePasswordChange}
             />
           </div>
           <div className="flex items-center justify-between">
             <button
               className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
               type="submit"
             >
               Sign In
             </button>
             <a
               className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
               href="/#"
             >
               Forgot Password?
             </a>
           </div>
         </form>
         <p className="text-center text-gray-500 text-xs">
           &copy;2022 Victor Chukwurah. All rights reserved.
         </p>
       </div>
     </>
   );
}

export default Login