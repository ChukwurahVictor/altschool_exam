import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar.jsx";
import { UserContext } from "./context/UserContext";
import Login from './pages/Login';

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};
const App = () => {
  const { userInfo, isAuth } = useContext(UserContext);
  
  console.log(userInfo);
  if(isAuth) {
    return <Dashboard />
  } else {
    return <Login />
  }
  // return (
    // <div className="app">
    //   <ErrorBoundary FallbackComponent={ErrorFallback}>
    //       <Navbar />
    //       <Router>
    //         <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/dashboard" element={<Dashboard  />} />
    //           <Route path="/about" element={<About />} />
    //           <Route path="/contact" element={<Contact />} />
    //           <Route path="*" element={<NotFound />} />
    //         </Routes>
    //       </Router>
    //   </ErrorBoundary>
    // </div>
  // );
};

export default App;
