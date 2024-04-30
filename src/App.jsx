import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Home from "./components/Home";
import './App.css'
import Beans from './assets/coffee-beans.png'
import { Route, Routes } from "react-router-dom";
import Basket from "./components/Basket/Basket";

function App() {
  const [showGoTopButton, setShowGoTopButton] = useState(false);

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

  const navbar =  location.pathname === "/" ? <Navbar /> : '';

  return (
    <>
      {navbar}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
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
