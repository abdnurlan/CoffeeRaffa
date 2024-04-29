import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Home from "./components/Home";
import './App.css'
import Beans from './assets/coffee-beans.png'

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

  return (
    <>
      <Navbar />
      <Home />
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
