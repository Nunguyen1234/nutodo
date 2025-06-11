// components/Home/Home.tsx
"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Destination from "./Destination/Destination";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";
import Review from "./Reviews/Review";
import News from "./News/News";
import Newsletter from "./Newsletter/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "../Auther/Login";
import Register from "../Auther/Register";

const Home = () => {
  // Removed HomeProps from here
  const [token, setToken] = useState<string | null>(null);
  const [showRegister, setShowRegister] = useState(false); // State to toggle between Login (false) and Register (true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  // useEffect(() => {
  //   // Check for a stored token when the component mounts
  //   const storedToken = localStorage.getItem("accessToken");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  const handleRegisterSuccess = () => {
    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    setShowRegister(false);
  };

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("accessToken", newToken);
    console.log("Logged in successfully with token:", newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("accessToken");
    setShowRegister(false);
    alert("Bạn đã đăng xuất.");
  };

  if (!token) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/br1.png')" }}>
        <div className="w-full max-w-md">
          {showRegister ? (
            <Register
              onRegisterSuccess={handleRegisterSuccess}
              setShowLogin={() => setShowRegister(false)}
            />
          ) : (
            <Login
              onLoginSuccess={handleLoginSuccess}
              setShowRegister={() => setShowRegister(true)}
            />
          )}
        </div>
      </div>
    );
  } 

  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <Newsletter />
      <div className="p-8 text-center bg-gray-200 mt-8">
        <p className="text-gray-700 break-words">Token: {token}</p>
        <button
          onClick={handleLogout}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default Home;
