"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Plane, Hotel, Car, Bus, MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CabsPage() {
  const [tripType, setTripType] = useState("airport");
  const [selected, setSelected] = useState(new Date());
    const [open, setOpen] = useState(false); // ✅ state for calendar visibility
    const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

    const [pickupTime, setPickupTime] = useState("10:00");
  // const [timezone, setTimezone] = useState("Asia/Kolkata");
  const cabs = [
    {
      city: "Cabs From Chennai To",
      cabroutes: "Vellore, Pondicherry, Bangalore, Tirupati, Coimbatore",
      image: "/flights/Coimbatore.png",
    },
    {
      city: "Cabs From Mumbai To",
      cabroutes: "Pune, Nasik, Shirdi, Lonavala, Mahabaleshwar",
      image: "/flights/marine drive.jpeg",
    },
    {
      city: "Cabs From Chandigarh To",
      cabroutes: "New Delhi, Shimla, Manali, Dharamshala, Gurgaon, Noida",
      image: "/hotels/manali.jpg",
    },
    {
      city: "Cabs From Delhi To",
      cabroutes: "Agra, Jaipur, Dehradun, Haridwar, Chandigarh",
      image: "/flights/delhi.jpg",
    },
    {
      city: "Cabs From Pune To",
      cabroutes: "Mumbai, Shirdi, Mahabaleshwar, Nasik, Aurangabad",
      image: "/flights/pune.jpeg",
    },
    {
      city: "Cabs From Bangalore To",
      cabroutes: "Ooty, Madikeri, Coorg, Vellore, Mysore",
      image: "/flights/bangalore.jpeg",
    },
    {
      city: "Cabs From Ahmedabad To",
      cabroutes: "Mumbai, Rajkot, Surat, Pune, Indore",
      image: "/flights/ahmedabad.jpeg",
    },
  ];
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

  return (
    <>
      <Header />

      <section
        className="relative bg-center py-16"
        style={{ backgroundImage: "url('/img/bg/map.png')" }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill z-[-1]"
        >
          <source src="/images/video/cab.MP4" type="video/MP4" />
        </video>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              MAKE MY BHARAT YATRA
            </h1>
            <p className="text-lg text-white font-semibold">
              Flights • Hotels • Holiday Packages • Buses • Cabs
            </p>
          </div>

          {/* Booking Form UI */}
          <Card>
            <CardContent>
              <Tabs defaultValue="cabs" className="w-full ">
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
                    <TabsTrigger
                      value="hotels"
                      className="flex items-center gap-2"
                    >
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
                    <TabsTrigger
                      value="bus"
                      className="flex items-center gap-2"
                    >
                      <Bus className="w-10 h-10" />
                    </TabsTrigger>
                  </Link>

                  {/* Cabs */}
                  <Link href="/cab">
                    <TabsTrigger
                      value="cabs"
                      className="flex items-center gap-2"
                    >
                      <Car className="w-10 h-10" />
                    </TabsTrigger>
                  </Link>
                </TabsList>

                <TabsContent value="cabs">

                  <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
      {/* Trip Type Tabs */}
      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={(e) => setTripType(e.target.value)}
          />
          Outstation One-Way
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="round"
            checked={tripType === "round"}
            onChange={(e) => setTripType(e.target.value)}
          />
          Outstation Round-Trip
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="airport"
            checked={tripType === "airport"}
            onChange={(e) => setTripType(e.target.value)}
          />
          <span className="">Airport Transfers</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer relative">
          <input
            type="radio"
            name="tripType"
            value="hourly"
            checked={tripType === "hourly"}
            onChange={(e) => setTripType(e.target.value)}
          />
          Hourly Rentals
          <span className="absolute -top-3 -right-8 text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full">
            NEW
          </span>
        </label>

        <span className="ml-auto text-lg  text-black font-bold ">
          Online Cab Booking
        </span>
      </div>

      {/* Booking Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
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
  <div className="relative">
    
      <label className="text-xs uppercase font-medium text-slate-500">
        Departure 
      </label>
      

      {/* Date Display (click to toggle calendar) */}
      <div
      
        className="flex items-center  gap-2 w-full justify-center font-bold text-sm border rounded-xl px-3 p-4 bg-white shadow-sm w-fit cursor-pointer"
        onClick={() => setOpen(!open)}
      >
          
        <CalendarIcon className="w-5 h-5 text-orange-500 " />
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
        <p className="text-xs text-orange-500 ">
          {selected.toLocaleDateString("en-US", { weekday: "long" })}
        </p>
      )}
      </div>

      {/* Calendar Dropdown */}
      {open && (
        <div className="absolute mt-2 p-2 bg-white shadow-lg rounded-xl z-10">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              setSelected(date);
              setOpen(false); // ✅ close after selecting date
            }}
          />
        </div>
      )}
    </div>

        {/* Pickup Time */}
        <div className="w-full max-w-md mx-auto space-y-2">
      {/* Label */}
      <label className="text-xs uppercase font-medium text-slate-500">
        Pickup Time
      </label>

      {/* Time + Timezone Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 font-bold p-2 border rounded-xl shadow-sm text-base sm:text-lg bg-white">
        <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />

        {/* Time Input */}
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-full sm:w-auto  px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Timezone Selector */}
        {/* <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="w-full sm:w-auto border rounded-lg px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Asia/Kolkata">India (IST)</option>
          <option value="America/New_York">New York (EST)</option>
          <option value="Europe/London">London (GMT)</option>
          <option value="Asia/Dubai">Dubai (GST)</option>
        </select> */}
      </div>

      {/* Info Text */}
      {/* <p className="text-sm text-gray-500 text-center sm:text-left md:">
        Pickup time is{" "}
        <span className="font-semibold">{pickupTime}</span> as per{" "}
        <span className="font-semibold">{timezone}</span> timezone
      </p> */}
    </div>
       {/* Search Button */}
<div className="flex justify-center  mt-6">
          <Button className="w-full md:w-auto px-6 py-3 rounded-sm bg-gray-400 hover:bg-gray-500 text-white font-semibold transition-colors duration-300">
            SEARCH CABS
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

      {/* Routes Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabs.map((cab) => (
              <div key={cab.city} className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={cab.image}
                    alt={cab.city}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{cab.city}</h3>
                  <p className="text-sm text-slate-900">{cab.cabroutes}</p>
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
