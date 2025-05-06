import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../contexts/Admin/AdminProvider";
import { useEffect } from "react";

const Home = () => {
  const { checkAdmin } = useAdmin();
  const navigate = useNavigate();

  const adminCheck = async (userId) => {
    try {
      const isAdmin = await checkAdmin(userId);
      if (isAdmin) {
        navigate("/admin"); // Redirect to home page if not an admin
      }
      else{
        navigate("/")
      }
    } catch (error) {
      navigate("/"); // Redirect if error occurs during admin check
    }
  };
  useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        // Perform admin check based on user ID
        if(user) adminCheck(user.user_id);
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Features />
      <About />
      <Contact />
    </>
  );
};

export default Home;
