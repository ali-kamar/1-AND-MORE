import React from 'react'
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import Account from '../../components/Account/Account';

const AccountPage = () => {
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