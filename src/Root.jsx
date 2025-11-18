import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Root = () => {
     useEffect(() => {
    AOS.init({
      duration: 800,  
     })
  }, [])
    return (
         <div data-aos="fade-up">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
         </div>
    );
};

export default Root;