import React, {useEffect} from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Account from '../../components/Account/Account';
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        navigate("/login");
      }
    })
    
    
  return (
    <>
      <Header />
      <Navbar />
      <Account />
      <Contact />
    </>
  );
}

export default AccountPage