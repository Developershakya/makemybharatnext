"use client";
import { useState, useEffect } from "react";
import { AiOutlinePicture, AiOutlineRight } from "react-icons/ai"; // Ant Design icons
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Header from "@/components/Header"; // Assuming you have a Header component
import { useRouter } from "next/router";
import Link from "next/link";
export default function HolidayPage() {
  const [isLarge, setIsLarge] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Itinerary");
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 640); // lg breakpoint = 1024px
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {" "}
      {isLarge ? (
        <Header />
      ) : (
        <button onClick={() => router.back()} className="flex items-center p-3">
          <FiArrowLeft className="text-gray-500 text-2xl" />
        </button>
      )}
      <div className="relative">
        <div
          className="h-[300px] w-full relative flex justify-center items-center bg-black"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center text-center">
            <h1 className="capitalize text-3xl font-semibold text-white mb-2">
              Goa Hero package with complimentary activities
            </h1>
            <p className="text-lg text-gray-200 mb-1">4 Nights / 5 Days</p>
            <p className="text-2xl font-extrabold text-orange-400 mb-4">
              ₹12,999 / Person
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition">
              Book Now
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-5 space-y-4">
          {/* Title */}
          <h1 className="capitalize text-2xl md:text-3xl  font-bold md:font-bold text-gray-900">
            Goa hero package with complimentary activities
          </h1>

          {/* Trip Info */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="border  sm:bg-[#26B5A9] sm:text-white px-2 py-1 rounded-sm text-xs font-medium">
              3N/4D
            </span>
            <span className="border sm:bg-black capitalize sm:text-white px-2 py-1 rounded-sm text-xs font-medium">
              package
            </span>
            <span className="border sm:bg-black capitalize sm:text-white px-2 py-1 rounded-sm text-xs font-medium">
              Customizable
            </span>
            <span className="text-[#4A4A4A] font-bold">3N Goa</span>
          </div>
          <div className="flex items-center gap-3 ml-4 text-sm text-gray-600">
            <ul className="flex gap-6">
              <li className="relative   px-2 py-1 rounded-sm text-xs font-medium">
                <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full flex items-center"></span>
                2D Delhi
              </li>
              <li className="relative  px-2 py-1 rounded-sm text-xs font-medium">
                <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full flex items-center"></span>
                1D Lucknow
              </li>
              <li className="relative   px-2 py-1 rounded-sm text-xs font-medium ">
                <span className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full flex items-center"></span>
                1D City
              </li>
            </ul>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3 h-[250px] rounded-xl">
            {/* Left Big Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
                alt=""
              />
              <div className="absolute flex justify-around items-center bottom-3 left-5 text-white bg-black/70 p-2 rounded-lg border border-[#848483] ">
                <AiOutlinePicture className="text-3xl cursor-pointer mr-1 hover:text-blue-600" />
                VIEW GALLERY
                <FiArrowRight className="mr-2 text-2xl" />
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2  gap-3">
              {/* Top Right Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg"
                  alt=""
                />
              </div>

              {/* Bottom Two Small Images */}
              <div
                className={`grid  gap-3 ${
                  isLarge ? "grid-rows-2" : "grid-cols-2"
                }`}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg"
                    alt=""
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6">
          {/* Tabs */}
          <div className="max-w-7xl mx-auto flex space-x-8 bg-white p-4 shadow-md rounded-t-lg -mt-2">
            <a
              href="#"
              className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
            >
              Itinerary
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Policies
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Summary
            </a>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1  gap-6">
            {/* Itinerary Section (left) */}
            <div className="col-span-2  bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-semibold mb-6">4 Day Plan</h2>

              {/* Day 1 */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-gray-800">
                  Day 1: Arrival in Goa
                </h3>
                <p className="text-sm text-red-600">
                  Note: You need to reach Goa on your own.
                </p>

                <div className="mt-4 border p-5 rounded-lg bg-gray-50">
                  <h4 className="font-semibold">Private Transfer</h4>
                  <p className="text-sm text-gray-700">
                    Airport to hotel via private cab
                  </p>
                </div>

                <div className="mt-4 border p-5 rounded-lg bg-gray-50">
                  <h4 className="font-semibold">
                    Resort Stay: Luxury Goa Resort
                  </h4>
                  <p className="text-sm text-gray-700">
                    3 Nights | Deluxe Room w/ Balcony
                  </p>
                  <img
                    src="https://images.pexels.com/photos/136721/pexels-photo-136721.jpeg"
                    alt="Resort Room"
                    className="mt-3 w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </section>

              {/* Day 2 */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-gray-800">
                  Day 2: Water Sports Activity
                </h3>
                <div className="mt-4 border p-5 rounded-lg bg-gray-50">
                  <h4 className="font-semibold">
                    Double Decker Boat Party with Water Sports
                  </h4>
                  <p className="text-sm text-gray-700">
                    4 Hours | Includes water sports, lunch & transfers
                  </p>
                  <img
                    src="https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg"
                    alt="Boat Party"
                    className="mt-3 w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </section>

              {/* Day 3 */}
              <section className="mb-8">
                <h3 className="text-lg font-bold text-gray-800">
                  Day 3: Leisure Day
                </h3>
                <p className="text-sm text-gray-700">
                  Enjoy resort amenities or add optional activities as you like.
                </p>
              </section>

              {/* Day 4 */}
              <section>
                <h3 className="text-lg font-bold text-gray-800">
                  Day 4: Departure
                </h3>
                <p className="text-sm text-red-600">
                  Note: Departure from Goa on your own.
                </p>
              </section>
            </div>

            {/* Sidebar (right) */}
            <aside className="col-span-1 hidden  md:block space-y-6">
              <div className="bg-white  rounded-lg shadow p-6">
                <p className="text-sm line-through text-gray-500">₹12,295</p>
                <p className="text-4xl font-bold text-green-600">
                  ₹8,550 <span className="text-base">/ Adult</span>
                </p>
                <button className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:opacity-90">
                  Proceed to Payment
                </button>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Coupons & Offers
                </h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-2">
                  <p className="text-sm font-medium text-gray-800">
                    FREEDOMSALE
                  </p>
                  <p className="text-xs text-green-600">₹696 OFF applied</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-800">MMTHLD</p>
                  <p className="text-xs text-green-600">₹161 OFF available</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="bg-black fixed items-center  w-full  justify-between bottom-0 left-0 shadow p-4 lg:hidden md:hidden flex">
          <div className="flex flex-col">
            <p className="text-sm line-through text-gray-300">₹12,295</p>
            <p className="text-3xl font-bold text-white">₹8,550</p>
            <span className="text-gray-300">Per Person</span>
          </div>
          <button className="bg-gradient-to-r  from-orange-400 to-pink-500 text-white px-6 py-3 text-1xl font-bold rounded-xl shadow-lg hover:scale-105 transition">
            BOOK NOW
          </button>
        </div>
      </div>
    </>
  );
}
