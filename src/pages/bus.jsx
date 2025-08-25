
"use client";
// import { useState } from "react";
import  Link  from "next/link";
import {
  Plane,
  Hotel,
  Car,
  Bus,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";




export default function BusPage() {
    const [selected, setSelected] = useState();
      const [open, setOpen] = useState(false); // ✅ state for calendar visibility
      const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const ref = useRef(null);

      // ✅ Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  


      const indianCities = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Lucknow",
    "Chandigarh",
    "Goa",
    "Agra",
    "Varanasi",
    "Patna",
    "Bhopal",
    "Indore",
    "Nagpur",
    "Surat",
    "Amritsar",
  ];


  const buses = [
  {
    city: "Buses From Chennai To",
    routes: "Bangalore, Coimbatore, Madurai, Hyderabad, Trichy",
    image: "/flights/Coimbatore.png",
  },

  {
    city: "Buses From Mumbai To",
    routes: "Bangalore, Goa, Pune, Indore, Ahmedabad",
    image: "/flights/marine drive.jpeg",
  },
  {
    city: "Buses From Hyderabad To",
    routes: "Bangalore, Chennai, Mumbai, Pune, Vijayawada",
    image: "/flights/hyderabad.jpeg",
  },
  {
    city: "Buses From Delhi To",
    routes: "Lucknow, Dehradun, Manali, Kanpur, Jaipur",
    image: "/flights/delhi.jpg",
  },
  {
    city: "Buses From Pune To",
    routes: "Goa, Bangalore, Nagpur, Hyderabad, Mumbai",
    image: "/flights/pune.jpeg",
  },
  {
    city: "Buses From Kolkata To",
    routes: "Durgapur, Asansol, Siliguri, Bhubaneshwar, Bardhaman",
    image: "/flights/kolkata.jpeg",
  },
  {
    city: "Buses From Bangalore To",
    routes: "Chennai, Hyderabad, Coimbatore, Mumbai, Goa",
    image: "/flights/bangalore.jpeg",
  },
  {
    city: "Buses From Ahmedabad To",
    routes: "Mumbai, Rajkot, Surat, Pune, Indore",
    image: "/flights/ahmedabad.jpeg",
  },
];


  
  return (
    <>
    <Header />
     <section
      className="relative  bg-center py-16"
      style={{ backgroundImage: "url('/img/bg/map.png')" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/images/video/buss.MP4" type="video/MP4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-xl lg:text-7xl md:text-4xl sm:text-3xl font-bold captalize text-white mb-4">
            MAKE MY BHARAT YATRA
          </h1>
          <p className="text-xl text-white font-bold mb-8">
            Flights • Hotels • Holiday Packages • Buses • Cabs
          </p>
        </div>

        <Card>
          <CardContent>
            <Tabs defaultValue="bus" className="w-full">
             <TabsList className="flex justify-around w-full grid-cols-5  mb-6 bg- ">
                
                  {/* Flights */}
                <Link href="/flight">

                <TabsTrigger
                  value="flights"
                  className="flex items-center gap-2"
                >
                  <Plane className="w-10 h-10" />
                </TabsTrigger>
                </Link>

                
                 {/* Hotels */}
                <Link href="/hotel">

                <TabsTrigger value="hotels" className="flex items-center gap-2">
                  <Hotel className="w-10 h-10" />
                </TabsTrigger>
                </Link>


                  {/* Packages */}
                <Link href="/package">

                <TabsTrigger
                  value="packages"
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-10 h-10" />
                </TabsTrigger>
                </Link>

                
                  {/* Bus */}
                <Link href="/bus">
                <TabsTrigger value="bus" className="flex items-center gap-2">
                  <Bus className="w-10 h-10" />
                </TabsTrigger>
                </Link>


                  {/* Cabs */}
                <Link href="/cab">

                <TabsTrigger value="cabs" className="flex items-center gap-2">
                  <Car className="w-10 h-10" />
                </TabsTrigger>
                </Link>


              </TabsList>
    

     <TabsContent value="bus">
            <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
                <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black mb-6">
         <span className="ml-auto text-lg text-black font-bold "> Online Bus Booking</span> 
        </div>

      {/* Booking Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        {/* Pickup Location */}
      <div>
        <label className="text-xs uppercase font-medium text-slate-500">
          From
        </label>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
        >

          <option value="">Select Pickup Location</option>
          {indianCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Drop Location */}
      <div>
        <label className="text-xs uppercase font-medium text-slate-500">
          To
        </label>
        
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
        >
          <option value="" className=" flex items-center justify-center ">Select Drop Location</option>
          {indianCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

        {/* Departure Date */}
   <div className="relative" ref={ref}>
      <label className="text-xs uppercase font-medium text-slate-500">
        Departure
      </label>

      {/* Date Display (click to toggle calendar) */}
      <div
        className="flex items-center gap-2 w-full justify-center font-bold text-sm border rounded-xl px-3 p-4 bg-white shadow-sm cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <CalendarIcon className="w-5 h-5 text-orange-500" />
        <span>
          {selected
            ? selected.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "Pick a date"}
        </span>

        {/* Show weekday */}
        {selected && (
          <p className="text-xs text-orange-500">
            {selected.toLocaleDateString("en-US", { weekday: "long" })}
          </p>
        )}
      </div>

      {/* Calendar Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 p-2 bg-white shadow-lg rounded-xl z-10">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              setSelected(date);
              setOpen(false); // ✅ select karte hi band
            }}
          />
        </div>
      )}
    </div>

        {/* Pickup Time */}
       
       {/* Search Button */}
<div className="flex justify-center  mt-6">
          <Button className="w-full md:w-auto px-6 py-3 rounded-sm bg-gray-400 hover:bg-gray-500 text-white font-semibold transition-colors duration-300">
            SEARCH BUSES
          </Button>
        </div>
       
      </div>
        
    </div>
                
              </TabsContent>

              </Tabs>
              </CardContent>
           </Card>
           </div> 
      </section>

  <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto  rounded-2xl shadow-md p-6" >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buses.map((bus) => (
            <div key={bus.city} className="flex items-center space-x-4">
              {/* Circular Image */}
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={bus.image}
                  alt={bus.city}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* City + Routes */}
              <div>
                <h3 className="font-semibold text-lg">{bus.city}</h3>
                <p className="text-sm text-slate-900">{bus.routes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


   

      <Footer />
      </>
  );
}
