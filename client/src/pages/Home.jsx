import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Features from '../components/Features/Features'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
    <Header />
    <Navbar />
    <Banner />
    <Features />
    <About />
    <Contact />
    </>
  )
}

export default Home