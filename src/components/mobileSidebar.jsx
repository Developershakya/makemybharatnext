"use client";
import React, { useState } from "react";
import { FaUserCircle, FaGift, FaGlobe, FaMoneyBill, FaTags, FaTimes } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow"
        onClick={() => setIsOpen(true)}
      >
        <FaUserCircle className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 bg-white p-4 space-y-4 font-sans shadow-md 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-full md:w-72 rounded-r-xl overflow-y-auto
        `}
      >
        {/* Close Button on Mobile */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-xl">
          <FaUserCircle className="text-4xl mr-4" />
          <div className="flex-1">
            <h2 className="font-semibold text-lg">Hi</h2>
            <p className="text-sm">nilotrona4@gmail.com</p>
          </div>
          <BsArrowRight />
        </div>

        {/* MMT ICICI Card */}
        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center space-x-3">
            <IoCard className="text-2xl" />
            <span className="font-medium">MMT ICICI Card</span>
            <span className="text-xs text-white bg-purple-500 px-2 py-0.5 rounded-full">new</span>
          </div>
          <BsArrowRight />
        </div>

        {/* Other Menu Items */}
        {[
          { icon: <FaUserCircle className="text-2xl" />, title: "View/Manage Trips", subtitle: "View, modify your trips" },
          { icon: <FaGift className="text-2xl" />, title: "Gift Cards" },
          { icon: <FaGlobe className="text-2xl" />, title: "Country India" },
          { icon: <FaMoneyBill className="text-2xl" />, title: "Currency INR" },
          { icon: <FaTags className="text-2xl" />, title: "Offers" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              {item.icon}
              <div>
                <p className="font-medium">{item.title}</p>
                {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
              </div>
            </div>
            <BsArrowRight />
          </div>
        ))}

        {/* Footer Links */}
        <div className="text-xs text-gray-400 space-x-2">
          <a href="#" className="hover:underline">User Agreement</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
