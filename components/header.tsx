"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      {/* 1st Part: Shipping Info Bar */}
      <div className="bg-[#272343] w-full h-[45px] flex items-center justify-between px-4 md:px-12 text-white text-sm">
        <p>
          <span className="text-white">✔</span> Free Shipping On All Orders Over $50
        </p>
        <div className="flex space-x-4 text-xs md:text-sm">
          <span className="cursor-pointer hover:underline">Eng ▼</span>
          <Link href="/faqs" className="hover:underline">
            FAQs
          </Link>
          <Link href="/contactus" className="hover:underline">
            Need Help
          </Link>
        </div>
      </div>

      {/* 2nd Part: Logo and Cart */}
      <div className="bg-[#F0F2F3] w-full h-auto py-3 flex justify-between items-center px-4 md:px-12">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/Logo.png"
              alt="Comforty Logo"
              width={40}
              height={40}
              className="h-auto w-auto"
            />
            <span className="text-xl md:text-2xl font-semibold text-black">
              Comforty
            </span>
          </div>
        </Link>

        {/* Cart and Hamburger Button */}
        <div className="flex items-center space-x-4">
        <Link href="/cart" passHref>
  <div className="cursor-pointer bg-white border border-gray-200 px-3 py-2 rounded-md flex items-center gap-2 shadow-sm hover:border-[#007580] transition">
    <Image
      src="/cart.png"
      alt="Cart Icon"
      width={20}
      height={20}
    />
    <span className="hidden sm:block text-black">Cart</span>
    <span className="bg-[#007580] text-white text-xs px-2 py-1 rounded-full">
      2
    </span>
  </div>
</Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col space-y-1 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </button>
        </div>
      </div>

      {/* 3rd Part: Navigation Bar */}
      <nav className="bg-white w-full md:h-[74px] flex flex-col md:flex-row justify-between items-center px-4 md:px-12">
        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <ul className="flex flex-col md:hidden bg-white border-t border-gray-200 shadow-lg">
            <li className="border-b border-gray-200">
              <Link
                href="/"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#007580] text-sm"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href="/shop"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#007580] text-sm"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href="/products"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#007580] text-sm"
                onClick={toggleMenu}
              >
                Product
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href="/pages"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#007580] text-sm"
                onClick={toggleMenu}
              >
                Pages
              </Link>
            </li>
            <li className="border-b border-gray-200">
              <Link
                href="/about"
                className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#007580] text-sm"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
          </ul>
        )}

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 md:space-x-8">
          <li>
            <Link
              href="/"
              className="text-black hover:text-[#007580] text-sm md:text-base transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-black hover:text-[#007580] text-sm md:text-base transition"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-black hover:text-[#007580] text-sm md:text-base transition"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/pages"
              className="text-black hover:text-[#007580] text-sm md:text-base transition"
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-black hover:text-[#007580] text-sm md:text-base transition"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Contact Info */}
        <div className="hidden md:block text-black text-sm md:text-base">
          Contact: <span className="font-semibold">(808) 555-0111</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
