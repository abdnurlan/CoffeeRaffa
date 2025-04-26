import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Basket from "./components/Basket/Basket";
import BasketNavbar from "./components/Basket/BasketNavbar";
import Error from "./components/Error/Error";
import Home from "./components/Home";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import AdminPage from "./components/AdminPage/AdminPage";

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
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
      {showGoTopButton && (
        <button className="go-top-button" onClick={goToTop}>
          <img src="/assets/coffee-beans.png" alt="bean" />
          YUXARI
        </button>
      )}
    </>
  );
}

export default App;
