"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "../../../constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";

type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`${
        navBg ? " bg-blue-950 shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="border-2 border-white rounded-full p-1">
            <Image
              src="/images/logo.png"
              alt="Tripi Logo"
              width={80}
              height={80}
              className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
            />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            NSVFAMER
          </h1>
        </div>
        {/* Navlink */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className='relative inline-block text-white font-medium
            after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-yellow-300 
            after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 
            after:origin-right after:transition-transform after:duration-300'
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4">
          <button className="relative group md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-amber-600 hover:text-white transition-all rounded-xl transform hover:scale-105 hover:-translate-y-1 ease-out duration-500 hover:ring-2 hover:ring-offset-2 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 overflow-hidden">
            <span
              className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-700 transform
    translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-40 pointer-events-none"
            ></span>
            <span className="relative z-10">Book Now</span>
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
