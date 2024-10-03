"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-white p-4 sticky top-0 z-10">
      {/* Padded container with px-52 */}
      <div className="lg:px-52">
        {/* Flex container with the border within the padding */}
        <div className="flex items-center justify-between flex-row-reverse border-b border-gray-300 pb-10 ">
          {/* Logo */}
          <div className="flex gap-4 items-center">
            <ShoppingCart />
            <div className="text-[#A6A6A8] text-2xl font-bold">Brands</div>
          </div>

          {/* Hamburger Menu (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? (
                <X className="h-6 w-6 text-[#A6A6A8]" />
              ) : (
                <Menu className="h-6 w-6 text-[#A6A6A8]" />
              )}
            </button>
          </div>

          {/* Links (desktop) */}
          <ul className="hidden md:flex space-x-6 text-[#A6A6A8] md:items-center cursor-pointer">
            <li>
              <h1 className="font-bold text-2xl text-[#202126] pr-10">
                Sneakers
              </h1>
            </li>
            <li className="hover:text-[#202126] relative group">
              Collection
              <div className="absolute bottom-[-40px] left-0 w-full h-[3px] bg-[#F87E21] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
            <li className="hover:text-[#202126] relative group">
              Men
              <div className="absolute bottom-[-40px] left-0 w-full h-[3px] bg-[#F87E21] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
            <li className="hover:text-[#202126] relative group">
              Women
              <div className="absolute bottom-[-40px] left-0 w-full h-[3px] bg-[#F87E21] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
            <li className="hover:text-[#202126] relative group">
              About
              <div className="absolute bottom-[-40px] left-0 w-full h-[3px] bg-[#F87E21] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
            <li className="hover:text-[#202126] relative group">
              Contact
              <div className="absolute bottom-[-40px] left-0 w-full h-[3px] bg-[#F87E21] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile SideNav */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white p-4 transition-transform transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 md:hidden`}>
        <button
          className="absolute top-4 left-4 text-[#A6A6A8]"
          onClick={() => setIsNavOpen(false)}>
          <X className="h-6 w-6" />
        </button>
        <ul className="space-y-4 text-black mt-12 font-bold text-xl pt-6">
          <li className="hover:text-[#202126] pt-3"> Collection</li>
          <li className="hover:text-[#202126] pt-3">Men</li>
          <li className="hover:text-[#202126] pt-3">Women</li>
          <li className="hover:text-[#202126] pt-3">About</li>
          <li className="hover:text-[#202126] pt-3">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
