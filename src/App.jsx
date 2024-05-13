import React, { useState, useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Home from "./components/Home";
import './App.css'
import Beans from '/assets/coffee-beans.png'
import Basket from "./components/Basket/Basket";
import BasketNavbar from "./components/Basket/BasketNavbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showGoTopButton, setShowGoTopButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowGoTopButton(true);
      } else {
        setShowGoTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHomePage = location.pathname === "/";

  return (
    <>
      <ToastContainer />
      {isHomePage ? <Navbar /> : <BasketNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
      {showGoTopButton && (
        <button className="go-top-button" onClick={goToTop}>
          <img src={Beans} alt="bean" />
          GO TOP
        </button>
      )}
    </>
  );
}

export default App;
