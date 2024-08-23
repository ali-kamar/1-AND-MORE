import React from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Login from '../../components/Login/Login';
const LoginPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Login />
      <Contact />
    </>
  );
}

export default LoginPage